// tailwind.config.js
module.exports = {
  "purge": [],
  "darkMode": false,
  "theme": {
    "extend": {}
  },
  "variants": {
    "extend": {}
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ]
}