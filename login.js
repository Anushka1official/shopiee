document.addEventListener("DOMContentLoaded", checkUser);

function toggleAuth() {
    document.getElementById("login-form").style.display = 
        document.getElementById("login-form").style.display === "none" ? "block" : "none";

    document.getElementById("register-form").style.display = 
        document.getElementById("register-form").style.display === "none" ? "block" : "none";

    document.getElementById("auth-title").textContent =
        document.getElementById("login-form").style.display === "none" ? "Register" : "Login";
}

function register() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    
    let name = document.getElementById("register-name").value;
    let email = document.getElementById("register-email").value;
    let password = document.getElementById("register-password").value;

    if (users.find(user => user.email === email)) {
        alert("Email already registered!");
        return;
    }

    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful! Please login.");
    toggleAuth();
}

function login() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    let user = users.find(user => user.email === email && user.password === password);
    
    if (user) {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        alert("Login successful!");
        window.location.href = "index.html";  
    } else {
        alert("Invalid credentials!");
    }
}

function checkUser() {
    let user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (user) {
        document.querySelector("header").innerHTML += `<p>Welcome, ${user.name} | <a href="#" onclick="logout()">Logout</a></p>`;
    }
}

function logout() {
    localStorage.removeItem("loggedInUser");
    alert("Logged out!");
    window.location.reload();
}
