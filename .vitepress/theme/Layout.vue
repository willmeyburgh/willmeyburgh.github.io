<script setup>
import DefaultTheme from 'vitepress/theme'
</script>

<template>
  <DefaultTheme.Layout>
    <template #doc-footer-before>
      <div class="custom-footer">
        <p>Built with <span style="color: var(--vp-c-brand-1);">Vue</span> and <span style="color: var(--vp-c-brand-2);">VitePress</span>.</p>
      </div>
    </template>
  </DefaultTheme.Layout>
</template>

<style scoped>
.custom-footer {
  text-align: center;
  padding: 2rem;
  border-top: 1px solid var(--vp-c-divider);
  margin-top: 2rem;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

</style>
