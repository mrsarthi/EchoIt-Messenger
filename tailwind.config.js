/*
 * Tailwind for the website, built ahead of time instead of the Play CDN, so
 * the page loads nothing from anyone else (privacy.html says so).
 *
 * Rebuild after changing classes in index.html or the scripts:
 *   npx tailwindcss@3.4.17 -c tailwind.config.js -i tailwind.input.css -o site.css --minify
 * (with @tailwindcss/forms and @tailwindcss/container-queries installed where
 * you run it — a scratch folder is fine; nothing here needs a package.json).
 */
module.exports = {
  content: ['./index.html', './*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#09090b',
        surface: '#131315',
        'surface-container': '#201f22',
        'surface-container-low': '#1c1b1d',
        'surface-container-high': '#2a2a2c',
        'surface-container-lowest': '#0e0e10',
        primary: '#10b981',
        'zinc-border': 'rgba(63, 63, 70, 0.4)',
        'zinc-muted': '#a1a1aa',
        'error-red': '#ef4444',
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px',
      },
      spacing: {
        'container-margin': '24px',
        'card-padding': '1.25rem',
        'breakpoint-md': '768px',
        'stack-gap': '0.75rem',
        'breakpoint-lg': '1200px',
        gutter: '16px',
      },
      fontFamily: {
        heading: ['Geist', 'system-ui', 'sans-serif'],
        body: ['Geist', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/container-queries')],
};
