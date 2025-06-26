import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import ProjectCard from './components/ProjectCard.vue'
import './style.css'


export default {
  ...DefaultTheme,
  Layout: Layout,
  enhanceApp({ app }) {
    app.component('ProjectCard', ProjectCard)
  }
}
