/**
 * Shared Layout Components Module
 * Asynchronously loads and injects the navbar and footer, highlights active routes,
 * and attaches internationalization hooks.
 */
const Components = {
  async loadNavbar(containerSelector = "#navbar-placeholder") {
    const container =
      document.querySelector(containerSelector) ||
      document.getElementById("navbar-container");
    if (!container) return;

    try {
      const res = await fetch("page_elements/navbar.html");
      if (!res.ok) throw new Error(`HTTP ${res.status} fetching navbar`);
      container.innerHTML = await res.text();

      // Highlight current page
      const currentPath =
        window.location.pathname.split("/").pop() || "index.html";
      const navLinks = container.querySelectorAll(".nav-links a");
      navLinks.forEach((link) => {
        link.classList.remove("active");
        link.removeAttribute("aria-current");
        const href = link.getAttribute("href");
        if (
          href === currentPath ||
          (currentPath === "" && href === "index.html")
        ) {
          link.classList.add("active");
          link.setAttribute("aria-current", "page");
        }
      });

      // Bind language switch button
      const langBtn = container.querySelector(".lang-switch");
      if (langBtn && typeof I18n !== "undefined") {
        langBtn.addEventListener("click", () => I18n.toggleLanguage());
      }
    } catch (err) {
      console.error("Error loading navbar component:", err);
    }
  },

  async loadFooter(containerSelector = "#footer-placeholder") {
    const container =
      document.querySelector(containerSelector) ||
      document.getElementById("footer-container");
    if (!container) return;

    try {
      const res = await fetch("page_elements/footer.html");
      if (!res.ok) throw new Error(`HTTP ${res.status} fetching footer`);
      container.innerHTML = await res.text();
    } catch (err) {
      console.error("Error loading footer component:", err);
    }
  },

  async initLayout() {
    await Promise.all([this.loadNavbar(), this.loadFooter()]);
    if (typeof I18n !== "undefined") {
      I18n.applyTranslations();
    }
  }
};

