module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Docusaurus',
      collapsed: false,
      items: ['introduction', 'design-principles', 'contributing'],
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: ['installation', 'configuration', 'typescript-support'],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/creating-pages',
        'styling-layout',
        'static-assets',
        {
          Docs: ['docs-introduction', 'markdown-features', 'versioning'],
        },
        'blog',
        'search',
        'deployment',
        'guides/migrating-from-v1-to-v2',
      ],
    },
    {
      type: 'category',
      label: 'Git',
      collapsed: false,
      items: ['git/git-branch', 'git/git-merge'],
    },
  ]  
};
