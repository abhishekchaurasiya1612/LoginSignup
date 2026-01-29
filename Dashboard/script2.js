// ======================
// AUTH CHECK
// ======================
const email = localStorage.getItem("email");

if (!email) {
    window.location.href = "index.html";
}

// ======================
// PAGE LOAD EVENT
// ======================
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("userEmail").innerText = email;
    showGreeting();
    handleLastLogin();
    startIdleTimer();
});

// ======================
// GREETING EVENT
// ======================
function showGreeting() {
    const hour = new Date().getHours();
    let msg = "Welcome";

    if (hour < 12) msg = "Good Morning";
    else if (hour < 18) msg = "Good Afternoon";
    else msg = "Good Evening";

    document.getElementById("greeting").innerText = msg;
}

// ======================
// LAST LOGIN FEATURE
// ======================
function handleLastLogin() {
    const last = localStorage.getItem("lastLogin");
    if (last) {
        document.getElementById("lastLogin").innerText =
            "Last Login: " + last;
    }
    localStorage.setItem("lastLogin", new Date().toLocaleString());
}

// ======================
// LOGOUT EVENT
// ======================
function logout() {
    if (confirm("Do you want to logout?")) {
        localStorage.removeItem("email");
        window.location.href = "index.html";
    }
}

// ======================
// AUTO LOGOUT (IDLE)
// ======================
let idleTime = 0;

function startIdleTimer() {
    setInterval(() => {
        idleTime++;
        if (idleTime > 30) {
            alert("Logged out due to inactivity");
            logout();
        }
    }, 1000);

    window.addEventListener("mousemove", resetIdle);
    window.addEventListener("keydown", resetIdle);
}

function resetIdle() {
    idleTime = 0;
}

// ======================
// THEME TOGGLE EVENT
// ======================
function toggleTheme() {
    document.body.classList.toggle("dark");
    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark") ? "dark" : "light"
    );
}

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}
