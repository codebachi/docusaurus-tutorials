module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Docusaurus',
      collapsed: false,
      items: [
        'introduction', 
        'design-principles', 
        'contributing'
      ],
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'installation', 
        'configuration', 
        'typescript-support'
      ],
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
      collapsed: true,
      items: [
        'git/git-branching', 
        'git/git-branching-merging', 
        'git/git-merge'
      ],
    },
    {
      type: 'category',
      label: 'C language',
      collapsed: true,
      items: [
        'clang/getting-started',
        'clang/c-pointers',
        'clang-modern/cm-pointer'
      ],
    },
    {
      type: 'category',
      label: 'Math',
      collapsed: true,
      items: [
        'math/math'
      ],
    },
    {
      type: 'category',
      label: 'CSS',
      collapsed: true,
      items: [
        'web-css/css-selector'
      ],
    },
  ]  
};
