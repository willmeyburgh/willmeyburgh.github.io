import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Personal Portfolio",
  description: "A modern portfolio and resume website",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/docs/about' },
      { text: 'Projects', link: '/docs/projects' },
      { text: 'Contact', link: '/docs/contact' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
