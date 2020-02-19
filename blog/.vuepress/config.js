const path = require('path');
module.exports = (options, context, api) => {
  return {
    title: "lemon's blog",
    description: 'Web development, Frontend, JavaScript',
    theme: '@vuepress/blog',
    plugins: [
      [
        '@vuepress/google-analytics',
        {
          ga: process.env.GA
        }
      ]
    ],
    themeConfig: {
      directories: [
        {
          id: 'post',
          dirname: '_post',
          title: 'blog',
          path: '/',
          itemPermalink: '/:year/:month/:day/:slug'
        },
        {
          id: 'leetcode',
          dirname: '_leetcode',
          title: 'leetcode',
          path: '/leetcode/',
          itemPermalink: '/leetcode/:year/:month/:day/:slug'
        }
      ],
      sitemap: {
        hostname: 'https://blog.volc.top/'
      },
      comment: {
        service: 'vssue',
        autoCreateIssue: true,
        prefix: '[Post]',
        owner: 'lemon-lc',
        repo: 'vue-blog',
        clientId: '44fce3ee75617a58e0db',
        clientSecret: '59ed4a5658ca28eceb153cce5674b42f0e4773b5'
      },
      feed: {
        canonical_base: 'https://blog.volc.top/'
      },
      nav: [
        {
          text: 'BLOG',
          link: '/'
        },
        {
          text: 'LEETCODE',
          link: '/leetcode/'
        },
        // {
        //   text: 'Tag',
        //   link: '/tag/'
        // },
        {
          text: 'Github',
          link: 'https://github.com/lemon-lc'
        }
      ],
      footer: {
        contact: [
          {
            type: 'github',
            link: 'https://github.com/lemon-lc'
          },
          {
            type: 'mail',
            link: 'mailto:liucannn@sina.com'
          }
        ],
        copyright: [
          {
            text: 'Lemon © 2018',
            link: ''
          }
        ]
      },
      smoothScroll: true
    },
    alias: {
      '@assets': path.resolve(__dirname, '../assets')
    }
  };
};
