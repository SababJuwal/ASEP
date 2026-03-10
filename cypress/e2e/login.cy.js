/**
 * Acceptance Tests — Login Page
 * Requires the server to be running: node server.js
 * Run with: npx cypress run  (headless)
 *       or: npx cypress open (interactive)
 */
describe("Login Page — Acceptance Tests", () => {
  beforeEach(() => {
    cy.visit("/login.html");
  });

  // ── UI Layout ──────────────────────────────────────────────────────────────
  it("displays the login form with all required elements", () => {
    cy.get("#CustomerLoginForm").should("be.visible");
    cy.get("#CustomerEmail").should("be.visible");
    cy.get("#CustomerPassword").should("be.visible");
    cy.get("#loginBtn").should("contain.text", "Sign In");
    cy.get("#togglePassword").should("be.visible");
  });

  // ── Input Validation ───────────────────────────────────────────────────────
  it("shows email error when form is submitted with empty email", () => {
    cy.get("#loginBtn").click();
    cy.get("#emailError").should("be.visible").and("contain", "valid email");
  });

  it("shows password error when password is shorter than 6 characters", () => {
    cy.get("#CustomerEmail").type("test@test.com");
    cy.get("#CustomerPassword").type("abc");
    cy.get("#loginBtn").click();
    cy.get("#passwordError").should("be.visible").and("contain", "6 characters");
  });

  it("clears email error as user starts typing", () => {
    cy.get("#loginBtn").click();
    cy.get("#emailError").should("be.visible");
    cy.get("#CustomerEmail").type("t");
    cy.get("#emailError").should("not.be.visible");
  });

  it("clears password error as user starts typing", () => {
    cy.get("#CustomerEmail").type("test@test.com");
    cy.get("#CustomerPassword").type("ab");
    cy.get("#loginBtn").click();
    cy.get("#passwordError").should("be.visible");
    cy.get("#CustomerPassword").type("c");
    cy.get("#passwordError").should("not.be.visible");
  });

  // ── Show / Hide Password Toggle ────────────────────────────────────────────
  it("toggles password field from hidden to visible and back", () => {
    cy.get("#CustomerPassword").type("mypassword");
    cy.get("#CustomerPassword").should("have.attr", "type", "password");

    cy.get("#togglePassword").click();
    cy.get("#CustomerPassword").should("have.attr", "type", "text");

    cy.get("#togglePassword").click();
    cy.get("#CustomerPassword").should("have.attr", "type", "password");
  });

  // ── Server Error Messages (inline banner) ─────────────────────────────────
  it("shows 'no account found' error when redirected with not_found param", () => {
    cy.visit("/login.html?error=not_found");
    cy.get("#loginError")
      .should("be.visible")
      .and("contain", "No account found");
  });

  it("shows 'incorrect password' error when redirected with wrong_password param", () => {
    cy.visit("/login.html?error=wrong_password");
    cy.get("#loginError")
      .should("be.visible")
      .and("contain", "Incorrect password");
  });

  it("shows generic error message for unknown error param", () => {
    cy.visit("/login.html?error=unknown_code");
    cy.get("#loginError")
      .should("be.visible")
      .and("contain", "Login failed");
  });

  // ── Loading Spinner ────────────────────────────────────────────────────────
  it("shows spinner and disables button when valid form is submitted", () => {
    cy.get("#CustomerEmail").type("test@test.com");
    cy.get("#CustomerPassword").type("validpassword");

    // Intercept the login request so we can observe the spinner before redirect
    cy.intercept("POST", "/login", (req) => {
      req.reply({ statusCode: 302, headers: { Location: "/index.html" } });
    }).as("loginRequest");

    cy.get("#loginBtn").click();
    cy.get("#btnSpinner").should("be.visible");
    cy.get("#loginBtn").should("be.disabled");
  });
});
