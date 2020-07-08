
const path = require('path');

module.exports = function (context) {
  // const { siteConfig } = context;
  // const { themeConfig } = siteConfig;
  // const { googleAnalytics } = themeConfig || {};

  // if (!googleAnalytics) {
  //   throw new Error(
  //     `You need to specify 'googleAnalytics' object in 'themeConfig' with 'trackingId' field in it to use plugin-token-fetcher`,
  //   );
  // }

  // const { trackingID, anonymizeIP } = googleAnalytics;

  // if (!trackingID) {
  //   throw new Error(
  //     'You specified the `googleAnalytics` object in `themeConfig` but the `trackingID` field was missing. ' +
  //     'Please ensure this is not a mistake.',
  //   );
  // }

  const isProd = process.env.NODE_ENV === 'production';

  return {
    name: 'plugin-token-fetcher',
    async loadContent() { 
      console.log("Pluging loaded");
    },
    async contentLoaded({ content, actions }) {
      console.log("contentLoaded", { content, actions });
    },

    getClientModules() {
      return [path.resolve(__dirname, './fetcher')];
    },

    injectHtmlTags() {
      // if (!isProd) {
      //   return {};
      // }
      return {
        headTags: [
          // {
          //   tagName: 'link',
          //   attributes: {
          //     rel: 'preconnect',
          //     href: 'https://www.google-analytics.com',
          //   },
          // },
          // // https://developers.google.com/analytics/devguides/collection/analyticsjs/#alternative_async_tag
          // {
          //   tagName: 'script',
          //   innerHTML: `
          //     window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          //     ga('create', '${trackingID}', 'auto');
          //     ${anonymizeIP ? "ga('set', 'anonymizeIp', true);\n" : ''}
          //     ga('send', 'pageview');
          //   `,
          // },
          // {
          //   tagName: 'script',
          //   attributes: {
          //     async: true,
          //     src: 'https://www.google-analytics.com/analytics.js',
          //   },
          // },
        ],
      };
    },
  };
};