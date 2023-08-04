// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {



  title: 'Telos Docs',
  tagline: 'Documentation and Tutorials for Telos',
  url: 'https://help.telos.net',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/Telos_logo.png',
  organizationName: 'telosnetwork', // Usually your GitHub org/user name.
  projectName:'telos-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/telosnetwork/telos-docs/tree/master/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'UA-154600181-4',
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**','/index-off','/markdown-page','/my-react-page'],
          filename: 'sitemap.xml',
        },    
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      navbar: {
        title: '',
        logo: {
          alt: 'Telos Logo',
          src: 'img/acorn-light.png',
          srcDark: 'img/acorn-dark.png',
        },
        items: [
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'gettingStarted',
            label: 'Getting Started',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'evm',
            label: 'Telos EVM',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'zero',
            label: 'Telos Zero',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'digitalAssets',
            label: 'Digital Assets',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'gaming',
            label: 'Gaming',
          },
          {
            position: 'right',
            label: 'Developer Docs',
            href: 'https://docs.telos.net/',
          },

        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/4PBhQkE8NZ',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/HelloTelos',
              },
              {
                label: 'Developer Twitter',
                href: 'https://twitter.com/TelosDevelopers',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/HelloTelos',
              },
            ],
          },
          {
            title: 'Block Explorers',
            items: [
              {
                label: 'Telos Zero',
                href: 'https://explorer.telos.net',
              },
              {
                label: 'EVM - Teloscan',
                href: 'https://teloscan.io',
              },
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'News',
                href: 'https://www.telos.net/news',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/telosnetwork',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Telos Foundation, Inc.`,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      algolia: {
        appId: 'M49QB996FG',
        apiKey: '781dec423a50110abbe2e262dec95659',
        indexName: 'telos',
        contextualSearch: true,     
     },
    }),
};

module.exports = config;
