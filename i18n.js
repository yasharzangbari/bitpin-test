module.exports = {
  locales: ["fa"],
  defaultLocale: "fa",
  defaultNS: "common",
  pages: {
    "*": ["common"],
  },
  loadLocaleFrom: (lang, ns) =>
    // You can use a dynamic import, fetch, whatever. You should
    // return a Promise with the JSON file.
    import(`./src/locales/fa.json`).then((m) => m.default),
};
