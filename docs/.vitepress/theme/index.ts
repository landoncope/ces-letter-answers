import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import YouTubeEmbed from './components/YouTubeEmbed.vue'
import ImageLightbox from './components/ImageLightbox.vue'
import DocLayout from './components/DocLayout.vue'

export default {
  extends: DefaultTheme,
  Layout: DocLayout,
  enhanceApp({ app }) {
    app.component('YouTubeEmbed', YouTubeEmbed)
    app.component('ImageLightbox', ImageLightbox)
  }
} satisfies Theme
