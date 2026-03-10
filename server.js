const express = require("express");
const { createClient } = require("@supabase/supabase-js");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY,
);

// --- REGISTRATION BRAIN ---
app.post("/register", async (req, res) => {
  try {
    const customer = req.body.customer || req.body;
    const firstName = customer["first-name"];
    const password = customer["Password"];
    const confirmPassword = customer["ConfirmPassword"];

    if (!password || password !== confirmPassword) {
      return res
        .status(400)
        .send(
          "<h1>Error</h1><p>Passwords do not match!</p><a href='javascript:history.back()'>Go Back</a>",
        );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const { error } = await supabase.from("profiles").insert([
      {
        first_name: firstName,
        last_name: customer["Last-name"],
        email: customer["email"],
        password_hash: hashedPassword,
      },
    ]);

    if (error) return res.status(400).send("Error: " + error.message);

    res.send(`
            <html>
                <head>
                    <meta http-equiv="refresh" content="2;url=/login.html">
                    <style>#pre-loader { display: none !important; }</style>
                </head>
                <body style="text-align:center; margin-top:50px; font-family:sans-serif;">
                    <h1>Registration Successful!</h1>
                    <p>Moving to Login page in 2 seconds...</p>
                </body>
            </html>
        `);
  } catch (err) {
    res.status(500).send("Server Error: " + err.message);
  }
});

// --- LOGIN BRAIN (Moved ABOVE app.listen) ---
app.post("/login", async (req, res) => {
  const email =
    (req.body.customer && req.body.customer.email) || req.body.email;
  const password =
    (req.body.customer && req.body.customer.password) || req.body.password;
  try {
    const { data: user, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("email", email)
      .single();

    if (error || !user)
      return res.redirect("/login.html?error=not_found");

    const isMatch = await bcrypt.compare(password, user.password_hash);

    if (isMatch) {
      // Set a client-readable cookie with display info (30 day session)
      res.cookie(
        "user_session",
        JSON.stringify({
          name: user.first_name || user.email.split("@")[0],
          email: user.email,
        }),
        {
          httpOnly: false,
          maxAge: 30 * 24 * 60 * 60 * 1000,
          sameSite: "lax",
        },
      );
      return res.redirect("/index.html");
    } else {
      return res.redirect("/login.html?error=wrong_password");
    }
  } catch (err) {
    res.redirect("/login.html?error=server_error");
  }
});

// --- LOGOUT ---
app.get("/logout", (req, res) => {
  res.clearCookie("user_session");
  res.redirect("/index.html");
});

// --- START SERVER (Always at the very bottom) ---
if (require.main === module) {
  app.listen(3000, () => console.log("Server running at http://localhost:3000"));
}

module.exports = app;
