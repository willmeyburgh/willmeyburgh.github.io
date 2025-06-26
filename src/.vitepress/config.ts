import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: 'docs', // Content source is the 'docs' directory relative to the root
  title: "Annekin Meyburgh",
  description: "",
  appearance: 'force-dark',
  themeConfig: {
    // Set default to dark mode and remove the light/dark mode toggle
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' }, // Adjusted link for new srcDir
      { text: 'Projects', link: '/projects' }, // Adjusted link for new srcDir
      { text: 'Contact', link: '/contact' } // Adjusted link for new srcDir
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/awmeyburgh' }
    ]
  }
})
