import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/configs
export default defineConfig({
  srcDir: 'docs',
  title: "Will Meyburgh",
  description: "",
  appearance: 'force-dark',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico'}]
  ],
  themeConfig: {
    logo: '/hat-wizard-solid.png',
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Blog', link: '/blog', activeMatch: '^/blog/' },
      { text: 'About', link: '/about' },
      { text: 'Projects', link: '/projects' },
      { text: 'Contact', link: '/contact' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/willmeyburgh' },
      { icon: 'linkedin', link: 'https://za.linkedin.com/in/willmeyburgh' },
    ]
  }
})
