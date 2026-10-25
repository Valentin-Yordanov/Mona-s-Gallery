/**
 * Art Data Service
 * Provides centralized data access, caching, localization, and formatting helpers.
 */
const ArtService = {
  _cache: null,

  async getAll() {
    if (this._cache) return this._cache;
    const res = await fetch("data/paintings.json");
    if (!res.ok) throw new Error(`HTTP ${res.status} fetching paintings.json`);
    this._cache = await res.json();
    return this._cache;
  },

  async getById(id) {
    const list = await this.getAll();
    return list.find((p) => String(p.id) === String(id)) || null;
  },

  getLocalized(fieldObj, lang = I18n.getLanguage(), fallback = "") {
    if (!fieldObj) return fallback;
    if (typeof fieldObj === "string") return fieldObj;
    return fieldObj[lang] || fieldObj["en"] || fallback;
  },

  formatPrice(price, lang = I18n.getLanguage()) {
    if (price === null || price === undefined || isNaN(price)) {
      return I18n.t("textUnavail", lang);
    }
    return `${price} €`;
  },

  getYear(dateStr) {
    if (!dateStr) return "";
    return dateStr.split("-")[0] || "";
  }
};

