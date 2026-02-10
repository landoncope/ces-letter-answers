<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  src: string
  alt?: string
  width?: string
}>()

const open = ref(false)
</script>

<template>
  <span class="lightbox-trigger" @click="open = true">
    <img :src="src" :alt="alt || ''" :width="width || '120'" loading="lazy" />
  </span>
  <Teleport to="body">
    <div v-if="open" class="lightbox-overlay" @click="open = false">
      <img :src="src" :alt="alt || ''" class="lightbox-image" />
    </div>
  </Teleport>
</template>

<style scoped>
.lightbox-trigger {
  cursor: zoom-in;
  display: inline-block;
}

.lightbox-trigger img {
  border-radius: 4px;
  transition: opacity 0.2s;
}

.lightbox-trigger img:hover {
  opacity: 0.85;
}

.lightbox-overlay {
  position: fixed;
  inset: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.85);
  cursor: zoom-out;
  padding: 2rem;
}

.lightbox-image {
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 6px;
}
</style>
