import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: 'docs', // Content source is the 'src' directory
  title: "Annekin Meyburgh",
  description: "",
  appearance: 'force-dark',
  themeConfig: {
    // Set default to dark mode and remove the light/dark mode toggle
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Projects', link: '/projects' },
      { text: 'Contact', link: '/contact' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/awmeyburgh' }
    ]
  }
})
