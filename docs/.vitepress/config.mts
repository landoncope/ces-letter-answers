import { defineConfig } from 'vitepress'
import footnote from 'markdown-it-footnote'

export default defineConfig({
  title: 'CES Letter Answers',
  description: 'A comprehensive, faith-promoting response to the CES Letter from a Latter-day Saint perspective.',
  lang: 'en-US',
  cleanUrls: true,
  appearance: true,
  lastUpdated: false,

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon-32.png', sizes: '32x32' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
    ['meta', { property: 'og:title', content: 'CES Letter Answers' }],
    ['meta', { property: 'og:description', content: 'A comprehensive, faith-promoting response to the CES Letter.' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://cesletteranswers.org' }],
  ],

  markdown: {
    config: (md) => {
      md.use(footnote)
    }
  },

  themeConfig: {
    siteTitle: 'CES Letter Answers',

    nav: [],

    sidebar: [
      {
        text: 'Introduction',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/introduction', docFooterText: 'Introduction' },
          { text: 'CES Letter Background', link: '/ces-letter-background/' },
        ]
      },
      {
        text: 'Book of Mormon',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/book-of-mormon/', docFooterText: 'Book of Mormon' },
          { text: '1769 KJV Errors', link: '/book-of-mormon/kjv-errors' },
          { text: 'KJV Italics', link: '/book-of-mormon/kjv-italics' },
          { text: 'KJV Mistranslations', link: '/book-of-mormon/kjv-mistranslations' },
          { text: 'DNA', link: '/book-of-mormon/dna' },
          { text: 'Anachronisms', link: '/book-of-mormon/anachronisms' },
          { text: 'Archaeology', link: '/book-of-mormon/archaeology' },
          { text: 'Geography', link: '/book-of-mormon/geography' },
          { text: 'View of the Hebrews', link: '/book-of-mormon/view-of-the-hebrews' },
          { text: 'The Late War', link: '/book-of-mormon/the-late-war' },
          { text: 'The First Book of Napoleon', link: '/book-of-mormon/first-book-of-napoleon' },
          { text: 'Godhead Changes', link: '/book-of-mormon/godhead-changes' },
        ]
      },
      {
        text: 'Book of Mormon Translation',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/book-of-mormon-translation/', docFooterText: 'Book of Mormon Translation' },
          { text: 'Seer Stones', link: '/book-of-mormon-translation/seer-stones' },
          { text: 'Urim and Thummim', link: '/book-of-mormon-translation/urim-and-thummim' },
        ]
      },
      {
        text: 'First Vision',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/first-vision/', docFooterText: 'First Vision' },
          { text: 'Multiple Accounts', link: '/first-vision/multiple-accounts' },
          { text: 'Contradictions', link: '/first-vision/contradictions' },
          { text: 'Late Appearance', link: '/first-vision/late-appearance' },
        ]
      },
      {
        text: 'Book of Abraham',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/book-of-abraham/', docFooterText: 'Book of Abraham' },
          { text: 'Papyri', link: '/book-of-abraham/papyri' },
          { text: 'Facsimiles', link: '/book-of-abraham/facsimiles' },
          { text: 'Anachronisms & Source Texts', link: '/book-of-abraham/anachronisms-source-texts' },
        ]
      },
      {
        text: 'Polygamy & Polyandry',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/polygamy-polyandry/', docFooterText: 'Polygamy & Polyandry' },
          { text: "Joseph Smith's Marriages", link: '/polygamy-polyandry/joseph-smiths-marriages' },
          { text: 'Polyandry', link: '/polygamy-polyandry/polyandry' },
          { text: 'D&C 132 Contradictions', link: '/polygamy-polyandry/dc-132-contradictions' },
        ]
      },
      {
        text: 'Prophets',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/prophets/', docFooterText: 'Prophets' },
          { text: 'Adam-God', link: '/prophets/adam-god' },
          { text: 'Blood Atonement', link: '/prophets/blood-atonement' },
          { text: 'Priesthood & Temple Ban', link: '/prophets/priesthood-temple-ban' },
          { text: 'Mark Hofmann', link: '/prophets/mark-hofmann' },
        ]
      },
      {
        text: 'Kinderhook Plates & Translator Claims',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/kinderhook-plates/', docFooterText: 'Kinderhook Plates' },
          { text: 'Kinderhook Plates', link: '/kinderhook-plates/kinderhook-plates' },
          { text: 'Translator Claims', link: '/kinderhook-plates/translator-claims' },
        ]
      },
      {
        text: 'Testimony & Spiritual Witnesses',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/testimony-spiritual-witnesses/', docFooterText: 'Testimony & Spiritual Witnesses' },
          { text: 'Competing Spiritual Claims', link: '/testimony-spiritual-witnesses/competing-claims' },
          { text: 'Reliability of Spiritual Witnesses', link: '/testimony-spiritual-witnesses/reliability' },
          { text: 'Failed Revelations', link: '/testimony-spiritual-witnesses/failed-revelations' },
        ]
      },
      {
        text: 'Priesthood Restoration',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/priesthood-restoration/', docFooterText: 'Priesthood Restoration' },
          { text: 'Late Appearance', link: '/priesthood-restoration/late-appearance' },
          { text: 'Backdating & Retrofitting', link: '/priesthood-restoration/backdating' },
        ]
      },
      {
        text: 'Witnesses',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/witnesses/', docFooterText: 'Witnesses' },
          { text: 'Credibility Concerns', link: '/witnesses/credibility-concerns' },
          { text: 'Second Sight', link: '/witnesses/second-sight' },
          { text: 'James Strang Comparison', link: '/witnesses/james-strang' },
        ]
      },
      {
        text: 'Temples & Freemasonry',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/temples-freemasonry/', docFooterText: 'Temples & Freemasonry' },
          { text: 'Masonic Connections', link: '/temples-freemasonry/masonic-connections' },
          { text: 'Temple Changes', link: '/temples-freemasonry/temple-changes' },
        ]
      },
      {
        text: 'Science',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/science/', docFooterText: 'Science' },
          { text: 'Evolution & the Fall', link: '/science/evolution-fall' },
          { text: 'Discredited Claims', link: '/science/discredited-claims' },
        ]
      },
      {
        text: 'Other Concerns',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/other-concerns/', docFooterText: 'Other Concerns' },
          { text: 'Transparency & Censorship', link: '/other-concerns/transparency-censorship' },
          { text: 'Church Finances', link: '/other-concerns/church-finances' },
          { text: 'Names of the Church', link: '/other-concerns/names-of-the-church' },
          { text: 'Anti-Intellectualism', link: '/other-concerns/anti-intellectualism' },
        ]
      },
      {
        text: 'Conclusion',
        link: '/conclusion'
      },
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'A faith-promoting resource for Latter-day Saints.',
      copyright: 'Copyright 2025-present'
    },

    docFooter: {
      prev: 'Previous',
      next: 'Next'
    },

    outline: {
      level: [2, 3],
      label: 'On this page'
    },

    externalLinkIcon: true,
  }
})
