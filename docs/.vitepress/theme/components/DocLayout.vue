<template>
  <Layout />
</template>

<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { onContentUpdated } from 'vitepress'

const { Layout } = DefaultTheme

function moveFootnotes() {
  const docFooter = document.querySelector('.VPDocFooter')
  if (!docFooter) return

  const parent = docFooter.parentElement
  if (!parent) return

  const vpDoc = document.querySelector('.vp-doc')
  if (!vpDoc) return

  const footnoteSep = vpDoc.querySelector('hr.footnotes-sep')
  const footnoteSection = vpDoc.querySelector('section.footnotes')

  // Only proceed when there are new footnotes to move — otherwise
  // leave previously moved footnotes in place (Vue re-renders may
  // fire onContentUpdated without regenerating footnotes).
  if (!footnoteSep && !footnoteSection) return

  // Remove previously moved footnotes before inserting fresh ones
  for (const el of Array.from(parent.querySelectorAll(':scope > hr.footnotes-sep, :scope > section.footnotes'))) {
    el.remove()
  }

  // Move current footnotes after the doc footer (prev/next buttons)
  if (footnoteSep) parent.insertBefore(footnoteSep, docFooter.nextSibling)
  if (footnoteSection) {
    const after = footnoteSep || docFooter
    parent.insertBefore(footnoteSection, after.nextSibling)
  }
}

onContentUpdated(() => {
  moveFootnotes()
})
</script>
