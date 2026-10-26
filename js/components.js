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
        langBtn.addEventListener("click", (e) => {
          const pill = e.target.closest(".lang-pill");
          if (pill) {
            const targetLang = pill.getAttribute("data-lang");
            if (targetLang && targetLang !== I18n.getLanguage()) {
              I18n.setLanguage(targetLang);
              return;
            }
          }
          I18n.toggleLanguage();
        });
      }

      // Bind mobile navigation toggle (hamburger menu)
      const toggleBtn = container.querySelector(".nav-toggle");
      if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
          const isOpen = container.classList.toggle("is-open");
          toggleBtn.classList.toggle("is-active", isOpen);
          toggleBtn.setAttribute("aria-expanded", String(isOpen));
        });

        // Close menu when clicking outside
        document.addEventListener("click", (e) => {
          if (!container.contains(e.target) && container.classList.contains("is-open")) {
            container.classList.remove("is-open");
            toggleBtn.classList.remove("is-active");
            toggleBtn.setAttribute("aria-expanded", "false");
          }
        });

        // Close menu when a navigation link is clicked
        container.querySelectorAll(".nav-links a").forEach((link) => {
          link.addEventListener("click", () => {
            container.classList.remove("is-open");
            toggleBtn.classList.remove("is-active");
            toggleBtn.setAttribute("aria-expanded", "false");
          });
        });
      }

      // Auto-hide navbar on mobile when scrolling down across all pages
      let lastScrollY = window.scrollY;
      window.addEventListener(
        "scroll",
        () => {
          if (window.innerWidth <= 768) {
            const currentScrollY = window.scrollY;
            if (
              currentScrollY > 60 &&
              currentScrollY > lastScrollY &&
              !container.classList.contains("is-open")
            ) {
              container.classList.add("nav-hidden");
            } else if (currentScrollY < lastScrollY || currentScrollY <= 20) {
              container.classList.remove("nav-hidden");
            }
            lastScrollY = currentScrollY;
          } else {
            container.classList.remove("nav-hidden");
          }
        },
        { passive: true }
      );
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

