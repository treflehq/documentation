module.exports = {
  someSidebar: [
    {
      type: 'category',
      label: 'Guides',
      items: [
        'getting-started',
        'pagination',
        'filtering',
        'sorting',
      ],
    },
    {
      type: 'category',
      label: 'Examples',
      collapsed: false,
      items: [
        'snippets'
      ]
    },
    {
      type: 'link',
      label: 'Reference', // The label that should be displayed (string).
      href: '/reference' // The target URL (string).
    },
  ]
};
