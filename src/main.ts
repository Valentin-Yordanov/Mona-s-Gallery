async function loadComponents() {
    const navContainer = document.getElementById('navbar-container');
    const footerContainer = document.getElementById('footer-container');

    if (navContainer) {
        const navRes = await fetch('navbar.html');
        navContainer.innerHTML = await navRes.text();
        
        // Automatically highlight the current page in the navbar
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = navContainer.querySelectorAll('.nav-links a');
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
            }
        });
    }
    
    if (footerContainer) {
        const footerRes = await fetch('footer.html');
        footerContainer.innerHTML = await footerRes.text();
    }
}

loadComponents();