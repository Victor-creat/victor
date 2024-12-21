document.addEventListener("DOMContentLoaded", () => {
    const saveForm = document.getElementById("save-form");

    saveForm.addEventListener("submit", handleSave);

    function handleSave(event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const amount = parseFloat(document.getElementById("amount").value);

        fetch(`http://localhost:3000/accounts?email=${email}`)
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    const account = data[0];
                    const updatedBalance = account.balance + amount;
                     // Redirect to login page or dashboard
                    window.location.href = "dashboard.html"; // Example of redirecting
                    fetch(`http://localhost:3000/accounts/${account.id}`, {
                        method: "PATCH",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ balance: updatedBalance })
                    })
                        .then(response => response.json())
                        .then(updatedAccount => {
                            alert(`Save successful! New balance: $${updatedAccount.balance}`);
                        })
                        .catch(error => console.error("Error updating account:", error));
                } else {
                    alert("Account not found!");
                }
            })
            .catch(error => console.error("Error fetching account:", error));
    }
});
