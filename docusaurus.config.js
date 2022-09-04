// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const beian = '粤IPC备2022098206'


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'web3 blog',
  tagline: 'by boxi',
  url: 'http://boxismartcontracts.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/头像.jpg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'boxi', // Usually your GitHub org/user name.
  projectName: 'web3 blog', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      navbar: {
        title: 'web3',
        logo: {
          alt: 'My Site Logo',
          src: 'img/头像.jpg',
        },
        items: [
          {
            label: 'introduce',
            position: 'left',
            type: 'docSidebar',
            sidebarId: 'introSidebar',
          },
          {
            label: 'programing_basics',
            position: 'left',
            type: 'docSidebar',
            sidebarId: 'program_basics',
          },
          // node
          // {
          //   label: 'node.js',
          //   position: 'left',
          //   type: 'docSidebar',
          //   sidebarId: 'node',
          // },
          // {
          //   label: 'typescript',
          //   position: 'left',
          //   type: 'docSidebar',
          //   sidebarId: 'ts',
          // },
          {
            label: 'rust',
            position: 'left',
            type: 'docSidebar',
            sidebarId: 'rust',
          },
          // {
          //   label: 'go',
          //   position: 'left',
          //   type: 'docSidebar',
          //   sidebarId: 'go',
          // },
          {
            label: 'solidity',
            position: 'left',
            type: 'docSidebar',
            sidebarId: 'solidity',
          },
          {
            label: 'rust_contract',
            position: 'left',
            type: 'docSidebar',
            sidebarId: 'rust_contract',
          },
          {
            label: 'move',
            position: 'left',
            type: 'docSidebar',
            sidebarId: 'move',
          },
          {
            label: 'blockchain',
            position: 'left',
            type: 'docSidebar',
            sidebarId: 'blockchain',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          {
            href: 'https://github.com/Mr-Boxi/web3_blog',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'study',
            items: [
              {
                label: 'rust',
                to: '/docs/rust/info',
              },
              {
                label: 'solidity',
                to: '/docs/solidity/info',
              },
              {
                label: 'rust-contract',
                to: '/docs/rust_contract/info',
              },
              {
                label: 'move',
                to: '/docs/move/info',
              },
              {
                label: 'blockchains',
                to: '/docs/blockchain/info',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `<a href="http://beian.miit.gov.cn/" >${beian}</a> Copyright © ${new Date().getFullYear()} boxi `,
        //copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
