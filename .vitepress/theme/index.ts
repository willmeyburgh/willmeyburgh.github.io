import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import ProjectCard from './components/ProjectCard.vue'
import ContactForm from './components/ContactForm.vue'
import TestimonialCarousel from './components/TestimonialCarousel.vue'

import './style.css'


export default {
  ...DefaultTheme,
  Layout: Layout,
  enhanceApp({ app }) {
    app.component('ProjectCard', ProjectCard)
    app.component('ContactForm', ContactForm)
    app.component('TestimonialCarousel', TestimonialCarousel)
  }
}