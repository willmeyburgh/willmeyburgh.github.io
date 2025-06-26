import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/configs
export default defineConfig({
  srcDir: 'docs',
  title: "Annekin Meyburgh",
  description: "",
  appearance: 'force-dark',
  head: [
    ['link', { rel: 'icon', href: '/public/favicon.ico'}]
  ],
  themeConfig: {
    logo: '/hat-wizard-solid.png',
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
