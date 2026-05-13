"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Define the HTML for the Navbar
const navbarHTML = `
<nav class="navbar">
    <div class="logo">Mona's Gallery</div>
    <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="info.html">Info</a></li>
        <li><a href="catalog.html">All Paintings</a></li>
    </ul>
    <button id="lang-switch">EN / BG</button>
</nav>
`;
// 2. Define the HTML for the Footer
const footerHTML = `
<footer class="footer">
    <p>&copy; 2026 Mona's Gallery. All rights reserved.</p>
    <p>Contact: info@monasgallery.com</p>
</footer>
`;
// 3. Inject them into the page when it loads
function loadComponents() {
    const navContainer = document.getElementById('navbar-container');
    const footerContainer = document.getElementById('footer-container');
    if (navContainer) {
        navContainer.innerHTML = navbarHTML;
    }
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
    }
}
// Run the function
loadComponents();
//# sourceMappingURL=main.js.map