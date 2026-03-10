const express = require("express");
const { createClient } = require("@supabase/supabase-js");
const path = require("path");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Replace with your friend's Supabase project info
const supabaseUrl = "https://tpowjtnqsenwvegrlrjv.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwb3dqdG5xc2Vud3ZlZ3Jscmp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwODQ2NTcsImV4cCI6MjA4ODY2MDY1N30.zs3v3J3GzCG77ysSIv8tHKbmY0EHxxcaZoKkibiAH1A";

const supabase = createClient(supabaseUrl, supabaseKey);

// POST /login route
app.post("/login", async (req, res) => {
  const email = req.body["customer[email]"];
  const password = req.body["customer[password]"];

  // Option A: If using Supabase Auth
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password
  });

  if (data.user) {
    res.send("Login successful!");
  } else {
    res.send("User not found or wrong password!");
  }

  // Option B: If using custom table
  /*
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .eq("password", password)
    .single();

  if (data) res.send("Login successful!");
  else res.send("User not found!");
  */
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));