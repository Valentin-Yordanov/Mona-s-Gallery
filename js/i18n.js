/**
 * Internationalization (i18n) Module
 * Handles translation dictionaries, persistence, and reactive language switching.
 */
const I18n = {
  translations: {
    // Navigation & Common
    navHome: { en: "HOME", bg: "НАЧАЛО" },
    navArtist: { en: "ARTIST", bg: "ХУДОЖНИК" },
    navPaintings: { en: "PAINTINGS", bg: "КАРТИНИ" },
    langBtn: { en: "БГ", bg: "EN" },
    untitled: { en: "Untitled", bg: "Неозаглавена" },
    footerTagline: {
      en: "Fine art paintings — original works for sale",
      bg: "Изящни картини — оригинални творби за продажба"
    },
    footerHome: { en: "Home", bg: "Начало" },
    footerArtist: { en: "Artist", bg: "Художник" },
    footerPaintings: { en: "Paintings", bg: "Картини" },
    footerRights: {
      en: "© 2026 Mona's Gallery. All rights reserved.",
      bg: "© 2026 Галерията на Мона. Всички права запазени."
    },
    artistPhotoLabel: { en: "Artist photo", bg: "Снимка на художника" },

    // Home Page - Editorial Hero
    heroBadge: { en: "Exhibition 2026", bg: "Изложба 2026" },
    heroSubbadge: {
      en: "Original Fine Art & Oil Explorations",
      bg: "Оригинално изящно изкуство и маслена живопис"
    },
    heroTitle: {
      en: "Visual Poetry in <span class='hero-title-accent'>Oil & Pigment</span>",
      bg: "Визуална поезия в <span class='hero-title-accent'>масло и пигмент</span>"
    },
    heroDesc: {
      en: "Step into the contemplative studio of Simona Dobreva. A collection of rich impasto, vibrant harmonies, and soulful textural depth.",
      bg: "Влезте в съзерцателното студио на Симона Добрева. Колекция от богат импасто релеф, живи хармонии и дълбока текстура."
    },
    meetArtistBtn: { en: "Meet the Artist &rarr;", bg: "За художника &rarr;" },
    artworkTagTitle: { en: "Everyday Life", bg: "Битово Ежедневие" },
    artworkTagSub: {
      en: "Original Oil on Canvas • 50 × 70 cm",
      bg: "Оригинална маслена живопис • 50 × 70 см"
    },
    handcraftedBadge: { en: "Handcrafted Oil", bg: "Ръчна маслена творба" },

    // Home Page - Featured & About
    featTitle: { en: "Paintings that Breathe", bg: "Картини, които дишат" },
    featDesc: {
      en: "Each piece is an intimate conversation between pigment, canvas, and feeling. Thick impasto layers invite you to reach out and touch the work itself.",
      bg: "Всяка творба е интимен разговор между пигмент, платно и чувство. Плътните импасто слоеве ви приканват да се докоснете до самото произведение."
    },
    featBtn: { en: "Explore Paintings &rarr;", bg: "Разгледай картините &rarr;" },
    seriesTitle: { en: "Latest Paintings", bg: "Последни картини" },
    seriesBtn: { en: "View all paintings &rarr;", bg: "Виж всички картини &rarr;" },
    card1: { en: "Cosmic Bloom", bg: "Космически цъфтеж" },
    card2: { en: "Ocean Fire", bg: "Океански огън" },
    card3: { en: "Golden Hour", bg: "Златен час" },
    card4: { en: "Deep Forest", bg: "Дълбока гора" },
    card5: { en: "Twilight", bg: "Здрач" },
    aboutTitle: { en: "An Artist Driven by Color", bg: "Творец, воден от цвета" },
    aboutDesc: {
      en: "Mona has been painting for over 8 years, exploring how color can evoke memory, mood, and meaning. Her studio is a laboratory of light and pigment.",
      bg: "Мона рисува от над 8 години, изследвайки как цветът може да събуди спомен, настроение и смисъл. Нейното студио е лаборатория за светлина и пигмент."
    },
    aboutBtn: { en: "Read the Story &rarr;", bg: "Прочети историята &rarr;" },

    // Catalog Page
    catalogBadge: { en: "Gallery Collection", bg: "Галерийна колекция" },
    catalogTitle: { en: "Selected Works", bg: "Избрани Творби" },
    catalogSubtitle: {
      en: "Original paintings, studies, and textural explorations.",
      bg: "Оригинални картини, етюди и текстурни изследвания."
    },
    btnAvail: { en: "Available", bg: "Налични" },
    btnUnavail: { en: "Unavailable", bg: "Неналични" },
    btnOrig: { en: "Original", bg: "Оригинални" },
    btnNotOrig: { en: "Not Original", bg: "Неоригинални" },
    optSortDateDesc: { en: "Newest to Oldest", bg: "От най-нови към най-стари" },
    optSortDateAsc: { en: "Oldest to Newest", bg: "От най-стари към най-нови" },
    optSortPriceAsc: { en: "Price: Low to High", bg: "Цена: Ниска към Висока" },
    optSortPriceDesc: { en: "Price: High to Low", bg: "Цена: Висока към Ниска" },
    optPriceAll: { en: "All Prices", bg: "Всички цени" },
    optPriceUnder: { en: "Under 150 €", bg: "Под 150 €" },
    optPriceMid: { en: "150 € - 250 €", bg: "150 € - 250 €" },
    optPriceOver: { en: "Over 250 €", bg: "Над 250 €" },
    optMediumAll: { en: "All Mediums", bg: "Всички материали" },
    optSizeAll: { en: "All Sizes", bg: "Всички размери" },
    badgeAvail: { en: "AVAILABLE", bg: "НАЛИЧНА" },
    badgeUnavail: { en: "UNAVAILABLE", bg: "ПРОДАДЕНА" },
    textUnavail: { en: "Unavailable", bg: "Неналична" },
    textNoMatch: {
      en: "No paintings match your selected filters.",
      bg: "Няма картини, отговарящи на вашите филтри."
    },

    // Detail Painting Page
    backLink: { en: "← Back to Paintings", bg: "← Назад към картините" },
    zoomHint: { en: "Click to Zoom", bg: "Кликнете за увеличение" },
    specMedium: { en: "MEDIUM", bg: "МАТЕРИАЛ" },
    specSize: { en: "SIZE", bg: "РАЗМЕР" },
    specDate: { en: "DATE", bg: "ГОДИНА" },
    specStatus: { en: "STATUS", bg: "СТАТУС" },
    statusAvail: { en: "Available", bg: "Налична" },
    statusUnavail: { en: "Unavailable", bg: "Продадена" },
    priceRequest: { en: "Price upon request", bg: "Цена по запитване" },
    btnInquire: { en: "Inquire to Purchase", bg: "Запитване за покупка" },
    descTitle: { en: "Description", bg: "Описание" },
    modalTitle: { en: "Purchase Inquiry", bg: "Запитване за покупка" },
    modalText: {
      en: "To acquire this piece, please contact me directly through my social media channels. I handle all sales personally to ensure secure shipping and authenticity.",
      bg: "За да придобиете тази творба, моля свържете се с мен директно чрез социалните ми мрежи. Обработвам всички продажби лично, за да гарантирам сигурна доставка и автентичност."
    },
    notFound: { en: "Painting not found", bg: "Картината не е намерена" },
    defaultType: { en: "ORIGINAL WORK", bg: "ОРИГИНАЛНА ТВОРБА" },
    defaultMedium: { en: "N/A", bg: "Няма данни" }
  },

  getLanguage() {
    const raw = localStorage.getItem("mona_lang") || "en";
    return raw === "BGN" || raw === "bg" ? "bg" : "en";
  },

  setLanguage(lang) {
    const normalized = lang === "BGN" || lang === "bg" ? "bg" : "en";
    localStorage.setItem("mona_lang", normalized);
    this.applyTranslations();
    window.dispatchEvent(
      new CustomEvent("mona:languageChange", { detail: { lang: normalized } })
    );
  },

  toggleLanguage() {
    const next = this.getLanguage() === "en" ? "bg" : "en";
    this.setLanguage(next);
  },

  t(key, lang = this.getLanguage()) {
    const item = this.translations[key];
    if (!item) return key;
    return item[lang] ?? item["en"] ?? key;
  },

  applyTranslations(container = document) {
    const lang = this.getLanguage();

    container.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = this.t(key, lang);
      if (val) {
        if (val.includes("&") || val.includes("<")) {
          el.innerHTML = val;
        } else {
          el.textContent = val;
        }
      }
    });

    const navLinks = container.querySelectorAll(".nav-links a");
    if (navLinks.length >= 3) {
      navLinks[0].textContent = this.t("navHome", lang);
      navLinks[1].textContent = this.t("navArtist", lang);
      navLinks[2].textContent = this.t("navPaintings", lang);
    }

    container.querySelectorAll(".lang-switch").forEach((btn) => {
      const pills = btn.querySelectorAll(".lang-pill");
      if (pills.length > 0) {
        pills.forEach((pill) => {
          if (pill.getAttribute("data-lang") === lang) {
            pill.classList.add("is-active");
          } else {
            pill.classList.remove("is-active");
          }
        });
        btn.setAttribute(
          "aria-label",
          lang === "en" ? "Switch language to Bulgarian" : "Switch language to English"
        );
      } else {
        btn.textContent = this.t("langBtn", lang);
      }
    });

    document.documentElement.lang = lang;
  },

  onLanguageChange(callback) {
    window.addEventListener("mona:languageChange", (e) => callback(e.detail.lang));
  }
};
