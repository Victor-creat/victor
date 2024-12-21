document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signup-form");

    signupForm.addEventListener("submit", handleSignup);

    function handleSignup(event) {
        event.preventDefault();

        const name = document.getElementById("signup-name").value;
        const email = document.getElementById("signup-email").value;
        const password = document.getElementById("signup-password").value;

        fetch(`http://localhost:3000/accounts?email=${email}`)
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    alert("Email already exists!");
                    // Redirect to login page or dashboard
                    window.location.href = "withdraw.html"; // Example of redirecting
                } else {
                    // Redirect to  page or dashboard
                    window.location.href = "deposit.html"; // Example of redirecting
                    const newUser = {
                        name: name,
                        email: email,
                        password: password,
                        accountNumber: generateAccountNumber(),
                        balance: 0,
                        userId: generateUserId(),
                        cardNumber: generateCardNumber()
                    };

                    fetch("http://localhost:3000/accounts", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(newUser)
                    })
                        .then(response => response.json())
                        .then(user => {
                            alert("Signup Successful!");
                        })
                        .catch(error => console.error("Error:", error));
                }
            })
            .catch(error => console.error("Error:", error));
    }

    function generateAccountNumber() {
        return Math.floor(Math.random() * 10000000000000000).toString().padStart(16, '0');
    }

    function generateUserId() {
        return Math.floor(Math.random() * 1000000).toString();
    }

    function generateCardNumber() {
        return Math.floor(Math.random() * 10000000000000000).toString().padStart(16, '0');
    }
});
