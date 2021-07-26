// Mobile Menu
const mobileMenu = document.querySelector('.mobile-menu');
const navbarItems = document.querySelector('.navbar-items');

let isNavbarOpen = false

function toggleNavbar() {
    if (!isNavbarOpen) {
        navbarItems.classList.add('open');
        mobileMenu.innerHTML = `<i class="fas fa-times"></i>`;
        isNavbarOpen = true;
    } else {
        navbarItems.classList.remove('open');
        mobileMenu.innerHTML = `<i class="fas fa-bars"></i>`;
        isNavbarOpen = false;
    }
}

mobileMenu.addEventListener('click', toggleNavbar);

// Back to Top
const backToTopBtn = document.getElementById("back-to-top");

// When the user clicks on the button, scroll to the top of the document
function backToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

backToTopBtn.addEventListener('click', backToTop);
