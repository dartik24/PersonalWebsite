# Timofey Fayzullin — personal page

A responsive React page based on `CurrentResume.pdf`, built with Vite and plain CSS.

## Run locally

```sh
npm install
npm run dev
```

Open the local URL printed by Vite (normally http://127.0.0.1:5173).

## Production

```sh
npm run build
npm run preview
```

Deploy the generated `dist` folder to a static host. The resume PDF is included in the build.

Edit page content in `src/main.jsx` and styling in `src/style.css`. Replacing the PDF updates the download; edit the page text separately when the resume changes.

## GitHub Pages

In the GitHub repository, open **Settings → Pages** and select **GitHub Actions** as the source. Push to `main` to deploy, or run **Deploy to GitHub Pages** from the Actions tab.

The workflow builds and publishes `dist`. Relative asset paths support both a `username.github.io` site and a repository subdirectory, including the profile photo and resume download.
