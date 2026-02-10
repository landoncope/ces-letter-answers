# CES Letter Answers

A comprehensive, faith-promoting response to the CES Letter from a Latter-day Saint perspective.

## Website

Published at [cesletteranswers.org](https://cesletteranswers.org).

## Development

This site is built with [VitePress](https://vitepress.dev/) and deployed to GitHub Pages.

### Prerequisites

- Node.js 22+

### Local Development

```bash
npm install
npm run docs:dev
```

This starts a local dev server at `http://localhost:5173` with hot reload.

### Build

```bash
npm run docs:build
npm run docs:preview   # preview the production build locally
```

### Deployment

The site deploys automatically to GitHub Pages on push to `main` via GitHub Actions.

## Project Structure

```
docs/
├── .vitepress/          # VitePress config and theme
├── assets/              # Images and other assets
├── public/              # Static files (CNAME, favicon)
├── index.md             # Homepage
├── introduction.md      # Introduction
├── book-of-mormon-*/    # Book of Mormon sections
├── first-vision/        # First Vision
├── book-of-abraham/     # Book of Abraham
├── polygamy-polyandry/  # Polygamy & Polyandry
├── temple-masonry/      # Temple & Masonry
├── prophetic-authority/ # Prophetic Authority
├── kinderhook-plates/   # Kinderhook Plates
├── priesthood-restoration/         # Priesthood Restoration
├── testimony-spiritual-witnesses/  # Testimony & Spiritual Witnesses
├── church-history/      # Church History Concerns
└── conclusion.md        # Conclusion
```

Each section directory contains an `index.md` (overview) and subsection markdown files.

## Contributing

This is a personal project focused on providing faith-promoting responses to the CES Letter. If you have suggestions or feedback, please feel free to open an issue.

## License

This work is intended to help build faith and understanding. Please feel free to share and use these materials in accordance with principles of honesty and integrity.
