document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("amount-form");
    const loan = document.getElementById("loan-form")
    const lineChartCtx = document.getElementById('lineChart').getContext('2d');
    const doughnutChartCtx = document.getElementById('doughnut').getContext('2d');

    let lineChart, doughnutChart;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const accountNumber = document.getElementById("account-number").value;
        const amount = parseFloat(document.getElementById("amount").value);

        fetch(`http://localhost:3000/accounts?accountNumber=${accountNumber}`)
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
                            alert(`Balance updated! New balance: $${updatedAccount.balance}`);
                            updateCharts(updatedAccount);
                        });
                } else {
                    alert("Account not found!");
                }
            })
            .catch(error => console.error("Error:", error));
    });

    function updateCharts(account) {
        // Update line chart
        lineChart.data.datasets[0].data.push(account.balance);
        lineChart.update();

        // Update doughnut chart
        doughnutChart.data.datasets[0].data[0] = account.balance;
        doughnutChart.update();
    }

    // Initialize Charts
    lineChart = new Chart(lineChartCtx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Earnings in $',
                data: [2050, 1900, 2100, 800, 800, 2000, 500, 2600, 2450, 150, 2300, 2900],
                backgroundColor: 'rgba(85, 85, 85, 1)',
                borderColor: 'rgba(41, 155, 99, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });

    doughnutChart = new Chart(doughnutChartCtx, {
        type: 'doughnut',
        data: {
            labels: ['Balance'],
            datasets: [{
                label: 'Balance',
                data: [], // This will be dynamically updated
                backgroundColor: [
                    'rgba(41, 155, 99, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(120, 46, 139, 1)'
                ],
                borderColor: [
                    'rgba(41, 155, 99, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(120, 46, 139, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });

    // Fetch initial balances to populate the charts
    fetch('http://localhost:3000/accounts')
        .then(response => response.json())
        .then(accounts => {
            const balances = accounts.map(account => account.balance);
            doughnutChart.data.datasets[0].data = balances;
            doughnutChart.update();
        })
        .catch(error => console.error('Error fetching initial balances:', error));
});
document.addEventListener("DOMContentLoaded", () => {
    const closeSidebarButton = document.getElementById("close-sidebar");
    const openSidebarButton = document.getElementById("open-sidebar");
    const sidebar = document.querySelector(".sidebar");

    closeSidebarButton.addEventListener("click", () => {
        sidebar.classList.add("hidden");
        openSidebarButton.style.display = "block";
    });

    openSidebarButton.addEventListener("click", () => {
        sidebar.classList.remove("hidden");
        openSidebarButton.style.display = "none";
    });
});

