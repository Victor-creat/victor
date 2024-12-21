document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", handleLogin);

    function handleLogin(event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        fetch(`http://localhost:3000/accounts?email=${email}&password=${password}`)
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    alert(`Login successful! Welcome, ${data[0].name}`);
                    // Redirect to dashboard or account page
                    window.location.href = "user.html"; // Example of redirecting
                } else {
                    alert("Invalid email or password!");
                }
            })
            .catch(error => console.error("Error:", error));
    }
});

