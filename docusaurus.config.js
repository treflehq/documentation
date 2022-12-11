// const path = require('path');
// const remarkJargon = require('remark-jargon');
// const remarkOpenAPI = require('remark-openapi');
// var jargon = require('./jargon.js')

module.exports = {
  title: 'Trefle documentation',
  customFields: {
    swagger: '/swagger.yaml',
  },
  tagline: 'Get started using the Trefle REST API',
  url: 'https://docs.trefle.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'treflehq',
  projectName: 'documentation',
  // themes: ['@docusaurus/theme-search-algolia'],
  themeConfig: {
    prism: {
      additionalLanguages: ['ruby'],
    },
    algolia: {
      // The application ID provided by Algolia
      appId: 'O1KF1XSVP7',

      // Public API key: it is safe to commit it
      apiKey: '2b61f11494ff46769eaa32e321c46831',

      indexName: 'trefle',

    },
    colorMode: {
      disableSwitch: true,
    },
    navbar: {
      title: 'Trefle documentation',
      hideOnScroll: true,
      logo: {
        alt: 'Trefle documentation',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/guides/getting-started',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'reference/',
          activeBasePath: 'reference',
          label: 'Reference',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/treflehq/documentation',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://trefle.io/profile',
          label: 'Account',
          position: 'right',
        },
        {
          href: 'https://trefle.io/profile',
          label: 'Sign in',
          position: 'right',
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          // homePageId: 'getting-started',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          editUrl:
            'https://github.com/treflehq/documentation/edit/master/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Trefle.`,
          },
          // Please change this to your repo.
          editUrl:
            'https://github.com/treflehq/documentation/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'UA-105084612-2',
          anonymizeIP: true,
        }
      },
    ],
  ],
  stylesheets: [
    'https://unicons.iconscout.com/release/v2.1.9/css/unicons.css',
  ],
  // plugins: [
  //   [path.resolve(__dirname, 'plugins/plugin-token-fetcher/'), {}],
  // ],
};
