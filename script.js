// SIGN UP
const signupForm = document.getElementById("signupForm");

if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = suName.value.trim();
        const email = suEmail.value.trim();
        const password = suPassword.value;
        const confirmPassword = suConfirmPassword.value;

        if (name === "" || email === "" || password === "" || confirmPassword === "") {
            alert("All fields are required");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        // Save data (localStorage)
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        alert("Signup successful! You can login now.");

        signupForm.reset();
    });
}






// LOGIN
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = liEmail.value.trim();
        const password = liPassword.value;

        const storedEmail = localStorage.getItem("email");
        const storedPassword = localStorage.getItem("password");

        if (email === "" || password === "") {
            alert("All fields are required");
            return;
        }

        if (email === storedEmail && password === storedPassword) {
            alert("Login successful!");
        } else {
            alert("Invalid email or password");
        }
    });
}
