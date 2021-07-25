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