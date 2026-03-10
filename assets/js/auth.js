// 1. Configuration: This connects your website to your group's Supabase database
const SUPABASE_URL = 'https://tpowjtnqsenwvegrlrjv.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwb3dqdG5xc2Vud3ZlZ3Jscmp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwODQ2NTcsImV4cCI6MjA4ODY2MDY1N30.zs3v3J3GzCG77ysSIv8tHKbmY0EHxxcaZoKkibiAH1A';

// Initialize the Supabase client
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// 2. Interaction: Find the login form in your HTML
const loginForm = document.querySelector('#CustomerLoginForm');

// 3. Logic: What happens when you click the "Sign In" button
loginForm.addEventListener('submit', async (e) => {
    // This line prevents the page from simply refreshing
    e.preventDefault(); 

    // Get the email and password you typed into the boxes
    const emailInput = document.querySelector('#CustomerEmail').value;
    const passwordInput = document.querySelector('#CustomerPassword').value;

    console.log("Checking credentials for:", emailInput);

    // Ask Supabase to check if this user exists and the password is correct
    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: emailInput,
        password: passwordInput,
    });

    if (error) {
        // If it fails (e.g., wrong password), show the error message
        alert("Login Error: " + error.message);
    } else {
        // If it works, show a success message and go to the home page
        alert("Login Successful! Welcome back.");
        window.location.href = 'index.html'; 
    }
});