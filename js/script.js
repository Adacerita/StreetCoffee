// --- BUKA TUTUP NAVBAR & CART ---
const navbarNav = document.querySelector('.navbar-nav');
const hamburgerMenu = document.querySelector('#hamburger-menu');
hamburgerMenu.onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
};

const shoppingCart = document.querySelector('.shopping-cart');
const shoppingCartButton = document.querySelector('#shopping-cart-button');
shoppingCartButton.onclick = (e) => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
};

// --- ALPINE INIT ---
document.addEventListener('alpine:init', () => {
    Alpine.morph.init(); 
});

// --- BUKA TUTUP SEARCH BAR ---
document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.querySelector('.search-form');
    const searchBox = document.querySelector('#search-box');
    const searchButton = document.querySelector('#search-button');

    if (searchButton && searchBox && searchForm) {
        searchButton.onclick = (e) => {
            searchForm.classList.toggle('active');
            searchBox.focus();
            e.preventDefault();
        };
    }

    // --- KLIK DI LUAR UNTUK MENUTUP SEMUA ---
    document.addEventListener('click', function(e) {
        if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
            navbarNav.classList.remove('active');
        }
        if (searchButton && searchForm && !searchButton.contains(e.target) && !searchForm.contains(e.target)) {
            searchForm.classList.remove('active');
        }
        if (!shoppingCartButton.contains(e.target) && !shoppingCart.contains(e.target)) {
            shoppingCart.classList.remove('active');
        }
    });
});