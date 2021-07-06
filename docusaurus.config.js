const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: '千帆 aPaaS 开发者主页',
  tagline: '像画画一样快速搭建多终端、免运维、可扩展的企业级应用',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'qcloud-apaas', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          position: 'left',
          type: 'doc',
          docId: 'cli/intro',
          label: 'CLI',
        },
        {
          position: 'left',
          label: 'SDK',
          to: '/docs/sdk',
          items: [
            {
              label: 'JS SDK',
              to: '/docs/sdk/js-sdk',
            },
          ],
        },
        {
          position: 'left',
          label: 'Open API',
          to: '/docs/open-api',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/qcloud-apaas',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: 'CLI',
              to: '/docs/cli',
            },
            {
              label: 'JS SDK',
              to: '/docs/sdk/js-sdk',
            },
            {
              label: 'Open API',
              to: '/docs/open-api',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/qcloud-apaas',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tencent. Built with Docusaurus.`,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./docs/sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/qcloud-apaas/website/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/qcloud-apaas/website/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
