# CLAUDE.md

## Project Overview

CES Letter Answers — a faith-promoting response website to the CES Letter, built with VitePress and deployed to GitHub Pages at cesletteranswers.org.

## Commands

- `npm run docs:dev` — Start local dev server (http://localhost:5173)
- `npm run docs:build` — Production build (output: docs/.vitepress/dist/)
- `npm run docs:preview` — Preview production build locally

## Tech Stack

- **VitePress** (static site generator, Vue-powered)
- **markdown-it-footnote** for `[^n]` footnote syntax
- **GitHub Actions** deploys to GitHub Pages on push to `main`

## Reference Materials

- `CES-Letter.pdf` — Local copy of the CES Letter (April 2013, updated October 2017) by Jeremy T. Runnells. This is the primary document being responded to. **Do not link to the CES Letter website** — we do not want to give them backlinks. Always cite from this PDF using the format below.

- `sources.csv` — Master index of all external sources responding to or supporting responses to the CES Letter. **Use this file when researching and writing articles.** Format: `Source,Section,URL,Category,Notes`. One row per source-section pair — a single source that covers multiple sections has multiple rows. Filter by the `Section` column to find all sources relevant to a given article.

  **Columns:**
  - `Source` — Name of the source (e.g., "FAIR Detailed", "Evidence Central", "Gospel Topics Essays")
  - `Section` — Which site section this row is relevant to. Values match directory names under `docs/`: `book-of-mormon`, `book-of-mormon-translation`, `first-vision`, `book-of-abraham`, `polygamy-polyandry`, `prophets`, `kinderhook-plates`, `testimony-spiritual-witnesses`, `priesthood-restoration`, `witnesses`, `temples-freemasonry`, `science`, `other-concerns`, `ces-letter-background`, `conclusion`
  - `URL` — Direct link to the source page
  - `Category` — `scholarly` (peer-reviewed/academic), `comprehensive` (book-length response), `blog`, `video`, `hub` (link aggregator), `meta` (about the CES Letter itself)
  - `Notes` — Brief description of what the source covers
  - `Fetch` — (optional) When present, indicates that the standard `WebFetch` tool cannot retrieve the source content and a specific fetching method is required. Values: `advanced-web-scraper` (site requires JavaScript rendering — use the advanced-web-scraper agent via the Task tool to fetch content). Most rows leave this blank, meaning the default `WebFetch` tool works fine.

  **How to use when writing an article:**
  1. Filter rows where `Section` matches the article's directory name
  2. Prioritize `scholarly` and `comprehensive` sources for footnotes
  3. Use `video` sources for YouTube embeds
  4. Fetch source URLs to gather arguments, evidence, and citations
  5. Always verify claims against primary sources before citing
  6. **The CSV is a starting point, not a constraint.** Follow leads from CSV sources to primary documents (Joseph Smith Papers, BYU Studies articles, archaeological reports, etc.) and cite those directly. The best footnote is often a primary source discovered during research, not a pre-indexed URL.

  **Source types by strength:**
  - Gospel Topics Essays, Joseph Smith Papers — official Church resources (authoritative)
  - Interpreter Foundation, BYU Studies, BYU RSC — peer-reviewed scholarly journals
  - Evidence Central, Pearl of Great Price Central, Scripture Central KnoWhys — short evidence summaries (good for positive case sections)
  - FAIR Detailed, Jim Bennett, Debunking-CESLetter, Sarah Allen — comprehensive point-by-point responses
  - Joseph Smith's Polygamy (Hales), Royal Skousen (Critical Text), John Gee, Steven Harper — subject-matter experts

## Project Structure

- `docs/` — All site content (VitePress source root)
  - `docs/.vitepress/config.mts` — Main config: sidebar navigation, search, theme settings. **Update this when adding/removing/renaming sections or subsections.**
  - `docs/.vitepress/theme/` — Theme customization (custom.css, YouTubeEmbed component)
  - `docs/assets/` — Images referenced in content (use absolute paths: `/assets/filename.jpeg`)
  - `docs/public/` — Static files copied to site root (CNAME, favicon)
- Each section is a directory under `docs/` (e.g., `docs/book-of-abraham/`)
  - `index.md` — Section overview page
  - Individual `.md` files — Subsection pages
- `docs/introduction.md` — Introduction overview page (part of the "Introduction" sidebar section)
- `docs/ces-letter-background/` — CES Letter Background subsection (origin, authorship, evolution)
- `docs/conclusion.md` — Standalone conclusion page

## Content Conventions

### Markdown pages

Every content page should have YAML frontmatter:

```yaml
---
title: Page Title
description: Brief description for SEO.
pipeline: v2
---
```

The `pipeline` field tracks which pipeline version produced the article (e.g., `v1`, `v2`).

### Footnotes/Citations

Use named footnote syntax. The `markdown-it-footnote` plugin renders these as superscript numbers linking to a footnote section at the page bottom. Named footnotes are self-documenting and don't break when reordered:

```markdown
Some claim about history.[^SkousenChanges]

[^SkousenChanges]: Royal Skousen, "Changes in the Book of Mormon," *Interpreter* 11 (2014): 161–176. https://...
```

Prefer named footnotes (`[^SkousenChanges]`) over numbered (`[^1]`).

### Citing the CES Letter

**Never link to the CES Letter website.** Always cite the local PDF copy using this format:

```markdown
<!-- Specific numbered claim -->
[^1]: Runnells, *CES Letter* (2017), "Book of Mormon," no. 1, p. 8.

<!-- General section reference -->
[^2]: Runnells, *CES Letter* (2017), "Book of Abraham," p. 36.

<!-- Range of claims -->
[^3]: Runnells, *CES Letter* (2017), "Book of Mormon," nos. 5–6, pp. 11–12.
```

The PDF sections and their starting pages:
- Book of Mormon, p. 8
- Book of Mormon Translation, p. 28
- First Vision, p. 32
- Book of Abraham, p. 36
- Polygamy | Polyandry, p. 51
- Prophets, p. 61
- Kinderhook Plates & Translator Claims, p. 70
- Testimony & Spiritual Witness, p. 74
- Priesthood Restoration, p. 80
- Witnesses, p. 85
- Temples & Freemasonry, p. 106
- Science, p. 110
- Other Concerns, p. 112
- Conclusion, p. 126

### YouTube Embeds

Use the global `YouTubeEmbed` Vue component. Extract only the video ID from the URL:

```markdown
<YouTubeEmbed video-id="dQw4w9WgXcQ" title="Descriptive title" />
```

### Callout Boxes

VitePress custom containers for highlighting key information:

```markdown
::: tip Further Reading
Links to official Church resources, Gospel Topics Essays, or related scholarly sources.
:::

::: info Key Point
Important contextual information or read-it-yourself primary source callouts.
:::

::: info Worth Acknowledging
Honest tensions or difficult nuances that deserve candid treatment.
:::
```

**Do not use** bare `::: tip` or `::: warning`. Always use the named variants above.

### Images

Place images in `docs/assets/` and reference with absolute paths:

```markdown
![Alt text](/assets/geography.jpeg)
```

Or use HTML `<figure>` for images with captions:

```html
<figure>
  <img src="/assets/image.jpeg" alt="Description" width="563" />
  <figcaption>Caption text here</figcaption>
</figure>
```

### Adding a New Section

1. Create directory under `docs/` (e.g., `docs/new-section/`)
2. Add `index.md` (overview) and subsection `.md` files
3. Add the section and its subsection links to the `sidebar` array in `docs/.vitepress/config.mts`

### Adding a New Subsection

1. Create the `.md` file in the appropriate section directory
2. Add a link to it in the section's sidebar entry in `docs/.vitepress/config.mts`
3. Add a link to it in the section's `index.md` subsections list

## Tone & Approach (Universal Principles)

These principles apply to all content on the site regardless of writing style or pipeline.

- **Respectful and confident.** Focus on claims, not character. Never attack Jeremy Runnells personally.
- **Evidence-driven.** Present documented evidence and let the reader draw conclusions. If a claim is misleading, show why with evidence — don’t just assert it.
- **Intellectually honest.** If a claim raises a genuinely hard question, say so before showing why the evidence still favors faith.
- **Well-sourced.** Back up claims with footnotes linking to scholarly sources, primary documents, and official Church resources. Unsourced assertions undermine credibility.
- **Show the positive case.** Don’t stop at defense. Where the evidence supports it, highlight facts that positively support the Church’s truth claims.
- **The Book of Mormon is the anchor.** When a topic gets genuinely difficult and clean answers aren’t available, remember what stands firm: the Book of Mormon. It was produced in roughly 60 working days with no substantive revisions, no whistleblowers, and no credible naturalistic explanation — and the evidence for its authenticity has only grown stronger over time. It is the most tangible evidence for the Church’s truth claims. Don’t force this into every article, but when a question is hard enough that the honest answer is "we don’t fully know," it is appropriate to remind the reader what we do know — and the Book of Mormon’s existence is the bedrock of that. Use this sparingly and where it naturally fits.

### Style Profiles

Voice, structure, paragraph density, and formatting patterns are defined per-pipeline in style profile files. See `.planning/styles/` for available profiles. Each pipeline doc (in `.planning/`) specifies which style profile its agents should read.

### Formatting reference (all styles)

These technical formatting conventions apply regardless of style profile:

**Comparison tables.** Show original vs. modern, claim vs. reality, or before vs. after:

```markdown
| Verse | Original | Modern Edition |
| --- | --- | --- |
| [**Reference**](link) | "original text" | "modern text" |
```

Use `<span class="change">text</span>` to highlight specific differences within table cells (renders in red).

**Inline links vs. footnotes.** These serve different purposes and can overlap. Inline links are for reader-friendly articles worth clicking — they say "read more about this." Footnotes are for sourcing claims — they say "here’s the evidence." It’s fine for the same claim to have both when the inline link points to an accessible article and the footnote points to the formal citation.

**Cross-links.** Link to related pages naturally within prose. Descriptive link text, not "click here."

**No manual next/previous links.** VitePress’s built-in `docFooter` handles prev/next navigation automatically using sidebar order. A custom layout wrapper (`DocLayout.vue`) moves the prev/next buttons above the footnotes section so readers see them before scrolling through citations.
