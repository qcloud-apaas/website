const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: '千帆 aPaaS 帮助中心',
  tagline: '像画画一样快速搭建多终端、免运维、可扩展的企业级应用',
  url: 'https://qcloud-apaas.github.io',
  baseUrl: '/website/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'qcloud-apaas', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/docs/product', label: '产品手册', position: 'left' },
        { to: '/docs/components', label: '自定义组件', position: 'left' },
        {
          position: 'left',
          label: 'API',
          to: '/docs/api',
          items: [
            {
              label: 'CLI',
              to: '/docs/api/cli',
            },
            {
              label: 'Web SDK',
              to: '/docs/api/web-sdk',
            },
            {
              label: 'Open Api',
              to: '/docs/api/open-api',
            },
          ],
        },
        { to: '/blog', label: '文章', position: 'left' },
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
          title: 'API',
          items: [
            {
              label: 'CLI',
              to: '/docs/api/cli',
            },
            {
              label: 'Web SDK',
              to: '/docs/api/web-sdk',
            },
            {
              label: 'Open API',
              to: '/docs/api/open-api',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '文章',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/qcloud-apaas',
            },
          ],
        },
      ],
      copyright: `Copyright © 2013-2021 Tencent Cloud. All Rights Reserved. 腾讯云 版权所有`,
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
          editUrl: 'https://github.com/qcloud-apaas/website/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/qcloud-apaas/website/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
