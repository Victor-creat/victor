document.addEventListener("DOMContentLoaded", () => {
    const withdrawForm = document.getElementById("withdraw-form");

    withdrawForm.addEventListener("submit", handleWithdraw);

    function handleWithdraw(event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const amount = parseFloat(document.getElementById("amount").value);

        fetch(`http://localhost:3000/accounts?email=${email}`)
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    const account = data[0];
                    if (account.balance >= amount) {
                        const updatedBalance = account.balance - amount;

                        fetch(`http://localhost:3000/accounts/${account.id}`, {
                            method: "PATCH",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ balance: updatedBalance })
                        })
                            .then(response => response.json())
                            .then(updatedAccount => {
                                alert(`Withdrawal successful! New balance: $${updatedAccount.balance}`);
                            });
                             //Defers to the required page
                     window.location.href = "dashboard.html"; // Example of redirecting
                    } else {
                        alert("Insufficient funds!");
                    }
                } else {
                    alert("Account not found!");
                }
            })
            .catch(error => console.error("Error:", error));
    }
});
