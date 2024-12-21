document.addEventListener("DOMContentLoaded", () => {
    const depositForm = document.getElementById("deposit-form");

    depositForm.addEventListener("submit", handleDeposit);

    function handleDeposit(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const amount = parseFloat(document.getElementById("amount").value);
        const messageElement = document.getElementById("message");

        fetch(`http://localhost:3000/accounts?email=${email}`)
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    const account = data[0];
                    const updatedBalance = account.balance + amount;

                    fetch(`http://localhost:3000/accounts/${account.id}`, {
                        method: "PATCH",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ balance: updatedBalance })
                    })
                        .then(response => response.json())
                        .then(updatedAccount => {
                            alert(`Deposit successful! New balance: $${updatedAccount.balance}`);
                        });
                        //Defers to the required page
                     window.location.href = "dashboard.html"; // Example of redirecting
                } else {
                    alert("Account not found!");
                }
            });
    }
});

