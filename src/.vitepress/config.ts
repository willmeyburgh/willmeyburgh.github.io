import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: '.', // Content source is the 'src' directory
  title: "Annekin Meyburgh",
  description: "",
  appearance: 'force-dark',
  themeConfig: {
    // Set default to dark mode and remove the light/dark mode toggle
    nav: [
      { text: 'Home', link: '/docs/' },
      { text: 'About', link: '/docs/about' },
      { text: 'Projects', link: '/docs/projects' },
      { text: 'Contact', link: '/docs/contact' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/awmeyburgh' }
    ]
  }
})
