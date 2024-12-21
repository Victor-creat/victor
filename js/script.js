
const navToggleBtn = document.querySelector('.navbar-toggle-btn');
const navBar = document.querySelector('.navbar-nav');

const navbarToggleFunc = function (){
    navbarToggleBtn.classList.toggle('active');
    navBar.classList.toggle('active');
}

    navToggleBtn.addEventListener('click', navbarToggleFunc);

    document.addEventListener("DOMContentLoaded", () => {
        const requestInviteButton = document.getElementById("request-invite-button");
    
        requestInviteButton.addEventListener('click', () => {
            // Replace 'https://new-website.com' with the URL of the website you want to redirect to
            window.location.href = 'login.html';
        });
    });
    