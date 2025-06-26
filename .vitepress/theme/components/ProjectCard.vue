<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: String,
  description: String,
  imageUrl: String,
  links: Array, // Array of objects like { text: String, url: String }
});
</script>

<template>
  <div class="project-card">
    <div class="project-content">
      <h3 class="project-title">{{ title }}</h3>
      <p class="project-description">{{ description }}</p>
      <div class="project-links">
        <a v-for="(link, index) in links" :key="index" :href="link.url" target="_blank" rel="noopener noreferrer" class="project-link">
          {{ link.text }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid var(--vp-c-brand-1-darker);
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  color: var(--vp-c-text-1);
}

.project-card:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-5px);
}

.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid var(--vp-c-divider);
}

.project-content {
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.project-title {
  font-size: 1.5em;
  color: var(--vp-c-brand-1);
  margin-bottom: 10px;
}

.project-description {
  font-size: 0.95em;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin-bottom: 15px;
  flex-grow: 1;
}

.project-links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: auto; /* Pushes links to the bottom */
}

.project-link {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background-color: var(--vp-c-brand-1);
  color: #000;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.project-link:hover {
  background-color: var(--vp-c-brand-1-darker);
  color: #000;
}
</style>
