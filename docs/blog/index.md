
<script setup>
import { blogs } from '../../.vitepress/blog/data';
import BlogCard from '../../.vitepress/theme/components/BlogCard.vue';
</script>

# My Blog

<div class="blogs-grid">
  <BlogCard
    v-for="blog in blogs"
    :key="blog.link"
    :title="blog.name"
    :description="blog.description"
    :imageUrl="blog.imageUrl"
    :url="blog.link"
    :date="blog.date"
  />
</div>

<style scoped>
.blogs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px 0;
}
</style>
