// --- NAVBAR, CART, SEARCH (Vanilla JS) ---
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#hamburger-menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
};

const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
};

const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');
document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
}

// Klik di luar elemen (Tetap dipertahankan untuk menu utama)
document.addEventListener('click', function(e) {
    const hm = document.querySelector('#hamburger-menu');
    const sc = document.querySelector('#shopping-cart-button');
    const sb = document.querySelector('#search-button');

    if(!hm.contains(e.target) && !navbarNav.contains(e.target)) navbarNav.classList.remove('active');
    if(!sb.contains(e.target) && !searchForm.contains(e.target)) searchForm.classList.remove('active');
    if(!sc.contains(e.target) && !shoppingCart.contains(e.target)) shoppingCart.classList.remove('active');
});


document.addEventListener('alpine:init', () => {
    // Jalankan feather.replace() setiap kali Alpine selesai merender konten baru
    Alpine.morph.init(); // Jika Anda menggunakan plugin morph
});