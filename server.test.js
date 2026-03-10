"use strict";

// Set env vars before any module is loaded (mocks replace supabase anyway)
process.env.SUPABASE_URL = "http://test.supabase.co";
process.env.SUPABASE_KEY = "test-key";

// ─── Mock Supabase ────────────────────────────────────────────────────────────
// These variable names MUST start with "mock" so babel-jest hoists them
// alongside jest.mock() calls (Jest requirement for factory-scoped vars).
const mockSingle = jest.fn();
const mockInsert = jest.fn();

jest.mock("@supabase/supabase-js", () => ({
  createClient: () => ({
    from: () => ({
      select: () => ({ eq: () => ({ single: mockSingle }) }),
      insert: mockInsert,
    }),
  }),
}));

// ─── Mock bcryptjs ────────────────────────────────────────────────────────────
const mockCompare = jest.fn();
const mockHash = jest.fn();

jest.mock("bcryptjs", () => ({
  compare: (...args) => mockCompare(...args),
  hash: (...args) => mockHash(...args),
}));

// ─── Load app AFTER mocks are registered ─────────────────────────────────────
const request = require("supertest");
const app = require("./server");

// ─────────────────────────────────────────────────────────────────────────────
// POST /login
// ─────────────────────────────────────────────────────────────────────────────
describe("POST /login", () => {
  beforeEach(() => jest.clearAllMocks());

  test("redirects to /login.html?error=not_found when user does not exist", async () => {
    // Supabase returns no user
    mockSingle.mockResolvedValue({ data: null, error: { message: "Not found" } });

    const res = await request(app)
      .post("/login")
      .type("form")
      .send("customer[email]=nobody@test.com&customer[password]=password123");

    expect(res.status).toBe(302);
    expect(res.headers.location).toBe("/login.html?error=not_found");
  });

  test("redirects to /login.html?error=wrong_password when password is incorrect", async () => {
    // Supabase returns a user
    mockSingle.mockResolvedValue({
      data: { email: "test@test.com", first_name: "Test", password_hash: "hashed" },
      error: null,
    });
    // bcrypt says password does NOT match
    mockCompare.mockResolvedValue(false);

    const res = await request(app)
      .post("/login")
      .type("form")
      .send("customer[email]=test@test.com&customer[password]=wrongpass");

    expect(res.status).toBe(302);
    expect(res.headers.location).toBe("/login.html?error=wrong_password");
  });

  test("sets user_session cookie and redirects to /index.html on success", async () => {
    // Supabase returns a user
    mockSingle.mockResolvedValue({
      data: { email: "test@test.com", first_name: "John", password_hash: "hashed" },
      error: null,
    });
    // bcrypt says password matches
    mockCompare.mockResolvedValue(true);

    const res = await request(app)
      .post("/login")
      .type("form")
      .send("customer[email]=test@test.com&customer[password]=correctpass");

    expect(res.status).toBe(302);
    expect(res.headers.location).toBe("/index.html");

    // Session cookie must be present
    const cookies = res.headers["set-cookie"] || [];
    const sessionCookie = cookies.find((c) => c.includes("user_session"));
    expect(sessionCookie).toBeDefined();
    expect(sessionCookie).toContain("user_session");
  });

  test("cookie contains the logged-in user name and email", async () => {
    mockSingle.mockResolvedValue({
      data: { email: "john@test.com", first_name: "John", password_hash: "hashed" },
      error: null,
    });
    mockCompare.mockResolvedValue(true);

    const res = await request(app)
      .post("/login")
      .type("form")
      .send("customer[email]=john@test.com&customer[password]=pass123");

    const cookies = res.headers["set-cookie"] || [];
    const sessionCookie = cookies.find((c) => c.includes("user_session"));
    const cookieValue = decodeURIComponent(sessionCookie.split(";")[0].split("=").slice(1).join("="));
    const parsed = JSON.parse(cookieValue);

    expect(parsed.name).toBe("John");
    expect(parsed.email).toBe("john@test.com");
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// GET /logout
// ─────────────────────────────────────────────────────────────────────────────
describe("GET /logout", () => {
  test("clears user_session cookie and redirects to /index.html", async () => {
    const res = await request(app).get("/logout");

    expect(res.status).toBe(302);
    expect(res.headers.location).toBe("/index.html");

    // Express clearCookie sets the cookie with an expired date
    const cookies = res.headers["set-cookie"] || [];
    const cleared = cookies.find((c) => c.startsWith("user_session="));
    expect(cleared).toBeDefined();
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// POST /register
// ─────────────────────────────────────────────────────────────────────────────
describe("POST /register", () => {
  beforeEach(() => jest.clearAllMocks());

  test("returns 400 when passwords do not match", async () => {
    const res = await request(app)
      .post("/register")
      .type("form")
      .send(
        "customer[first-name]=John&customer[email]=j@test.com" +
        "&customer[Password]=abc123&customer[ConfirmPassword]=xyz999"
      );

    expect(res.status).toBe(400);
    expect(res.text).toContain("Passwords do not match");
  });

  test("returns registration success page on valid data", async () => {
    mockHash.mockResolvedValue("hashed_password");
    mockInsert.mockResolvedValue({ error: null });

    const res = await request(app)
      .post("/register")
      .type("form")
      .send(
        "customer[first-name]=John&customer[Last-name]=Doe" +
        "&customer[email]=john@test.com" +
        "&customer[Password]=abc123&customer[ConfirmPassword]=abc123"
      );

    expect(res.status).toBe(200);
    expect(res.text).toContain("Registration Successful");
  });

  test("returns 400 when Supabase insert fails", async () => {
    mockHash.mockResolvedValue("hashed_password");
    mockInsert.mockResolvedValue({ error: { message: "Duplicate email" } });

    const res = await request(app)
      .post("/register")
      .type("form")
      .send(
        "customer[first-name]=John&customer[Last-name]=Doe" +
        "&customer[email]=existing@test.com" +
        "&customer[Password]=abc123&customer[ConfirmPassword]=abc123"
      );

    expect(res.status).toBe(400);
    expect(res.text).toContain("Duplicate email");
  });
});
