// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TON Byte Documentation',
  tagline: 'Decentralized storage based on TON',
  favicon: 'img/favicon.ico',

  url: 'https://docs.tonbyte.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  projectName: 'tonbyte-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '💎 TON Byte',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            to: "/docs/intro",
            position: 'left',
            label: 'Documentation',
          },
          {
            position: 'right',
            type: 'localeDropdown',
          },
          {
            href: 'https://twitter.com/TON_Byte',
            label: 'Twitter',
            position: 'right',
          },
          {
            href: 'https://t.me/tonbytecom',
            label: 'Telegram',
            position: 'right',
          },
          {
            href: 'https://t.me/tonbytesupport',
            label: 'Support',
            position: 'right',
          }
        ],
      },
      footer: {
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/TON_Byte',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/tonbytecom',
              },
              {
                label: 'Support chat',
                href: 'https://t.me/tonbytesupport',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TON Byte, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
