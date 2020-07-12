module.exports = {
  someSidebar: [
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/getting-started',
        'guides/pagination',
        'guides/filtering',
        'guides/sorting',
        'guides/searching',
      ],
    },
    {
      type: 'category',
      label: 'Advanced',
      collapsed: false,
      items: [
        'advanced/plants-fields',
        'advanced/client-side-apps',
        'advanced/distributions',
      ]
    },
    {
      type: 'category',
      label: 'Examples',
      collapsed: false,
      items: [
        'examples/snippets'
      ]
    },
    {
      type: 'link',
      label: 'Reference', // The label that should be displayed (string).
      href: '/reference' // The target URL (string).
    },
  ]
};
