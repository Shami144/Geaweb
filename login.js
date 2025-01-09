// login.js

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const cpf = document.getElementById("cpf").value;
    const password = document.getElementById("password").value;

    if (email && cpf && password) {
        alert("Login successful!"); // Simulated login action
    } else {
        alert("Please fill out all fields.");
    }
});