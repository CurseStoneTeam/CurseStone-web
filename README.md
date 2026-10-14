# CurseStone Web

Static website for the CurseStone project. Plain HTML, CSS and JavaScript with no build step.

## Structure

```
index.html
css/              base (tokens and themes), layout, components, contributors
js/
  main.js         bootstrap and hash navigation
  theme-init.js   applies the saved theme before first paint
  loader-guard.js watches the load: warns if the file is opened without a server or takes too long
  data/           site.js (links, Discord, banner, contributor settings)
  i18n/           index.js (active language and t()), es.js and en.js (texts)
  pages/          one page per file
  components/     reusable pieces
  services/       contributors.js (GitHub API with cache)
  behaviors/      theme, language, loading screen and copy button
  utils/          helpers
```

## Running locally

The site uses ES modules, so it has to be served over HTTP:

```
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Loading screen

When the site opens, a loading screen with a progress bar is shown. It waits for the styles,
fonts and icons, and for the components to render before revealing the page (each wait is
capped at 8 s so it can never block). If something fails, or 12 s pass without finishing, it
shows a message with a retry button. Opening `index.html` directly (`file://`) does not work
because of the ES modules; the message says so.

## Languages

The site is available in Spanish (ESP) and English (ENG). The button in the top bar switches
the language without reloading, and the choice is saved in `localStorage`; on the first visit
the browser language is used. All texts live in `js/i18n/es.js` and `js/i18n/en.js` with the
same keys. To add a text, define it in both files and use it with `t('key')`.

## Contributors

The page shows the top 25 by commits (`contributors.limit` in `site.js`).
`js/services/contributors.js` makes a single request to the GitHub API when the contributors
page is opened. The result is stored for 6 hours in `localStorage` and, once expired, it is
revalidated with an ETag (a 304 response does not use up the rate limit). If GitHub fails, the
saved copy is shown. Bots are excluded by account type or by a `[bot]` suffix; to hide anyone
else, add their lowercase username to `contributors.ignore` in `site.js`.
