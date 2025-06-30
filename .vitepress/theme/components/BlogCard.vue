<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: String,
  description: String,
  imageUrl: String,
  url: String,
  date: String,
});
</script>

<template>
  <a :href="url" class="blog-card">
    <img v-if="imageUrl" :src="imageUrl" :alt="title" class="blog-image" />
    <div class="blog-content">
      <h3 class="blog-title">{{ title }}</h3>
      <p class="blog-date">{{ date }}</p>
      <p class="blog-description">{{ description }}</p>
    </div>
  </a>
</template>

<style scoped>
.blog-card {
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid var(--vp-c-brand-1-darker);
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  color: var(--vp-c-text-1);
  text-decoration: none; /* Remove underline from link */
}

.blog-card:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-5px);
}

.blog-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid var(--vp-c-divider);
}

.blog-content {
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.blog-title {
  margin: 0em 0 0em 0;
  font-size: 1.5em;
  color: var(--vp-c-brand-1);
}

.blog-description {
  font-size: 0.95em;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  flex-grow: 1;
  margin: 0;
}

.blog-date {
  font-size: 0.75em;
  color: var(--vp-c-text-3);
  margin: 0 0 1em 0;
}
</style>
