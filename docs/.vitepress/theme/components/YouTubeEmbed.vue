<template>
  <figure class="youtube-embed">
    <iframe
      :src="`https://www.youtube-nocookie.com/embed/${videoId}`"
      :title="title"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      loading="lazy"
    ></iframe>
    <figcaption v-if="caption">{{ caption }}</figcaption>
  </figure>
</template>

<script setup lang="ts">
defineProps<{
  videoId: string
  title?: string
  caption?: string
}>()
</script>

<style scoped>
.youtube-embed {
  position: relative;
  width: 100%;
  max-width: 720px;
  margin: 1.5em 0;
}

.youtube-embed iframe {
  width: 100%;
  aspect-ratio: 16 / 9;
  border: 0;
  border-radius: 8px;
}

.youtube-embed figcaption {
  margin-top: 0.5em;
  font-size: 0.85em;
  color: var(--vp-c-text-2);
}
</style>
