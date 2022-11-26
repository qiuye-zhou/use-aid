import { defaultTheme, defineUserConfig } from 'vuepress'
import { sidebar } from './config/sidebar'

export default defineUserConfig({
  lang: '简体中文',
  title: "UseAid",
  description: '适用于vue3的程序集',
  locales: {
    '/': {
      lang: '简体中文',
      title: 'UseAid',
      description: '常用的vue3实用程序集',
  },
    '/us/': {
        lang: 'en-US',
        title: 'UseAid',
        description: 'Common vue3 utility sets.',
    },
  },
  head: [
    // ['link', { rel: 'icon', href: '/qiuye.jpg' }],
  ],
  theme: defaultTheme({
    // logo: '/qiuye.jpg',
    locales: {
      '/': {
          navbar: [
              {
                  text: 'Github',
                  link: 'https://github.com/qiuye-zhou/useaid',
              },
          ],
          selectLanguageName: '简体中文',
          selectLanguageText: '选择语言',
          selectLanguageAriaLabel: '选择语言',
          sidebar
      },
      '/us/': {
        navbar: [
            {
                text: 'Github',
                link: 'https://github.com/qiuye-zhou/useaid',
            },
        ],
        selectLanguageName: 'English',
        selectLanguageText: 'Language',
        sidebar
      },
    },
  }),
})