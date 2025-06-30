import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import ProjectCard from './components/ProjectCard.vue'
import BlogCard from './components/BlogCard.vue' // Import the new BlogCard component
import ContactForm from './components/ContactForm.vue'
import TestimonialCarousel from './components/TestimonialCarousel.vue'

import './style.css'
import GoHomeButton from './components/GoHomeButton.vue'


export default {
  ...DefaultTheme,
  Layout: Layout,
  enhanceApp({ app }) {
    app.component('ProjectCard', ProjectCard)
    app.component('BlogCard', BlogCard) // Register the new BlogCard component
    app.component('ContactForm', ContactForm)
    app.component('TestimonialCarousel', TestimonialCarousel)
    app.component('GoHomeButton', GoHomeButton)
  }
}
