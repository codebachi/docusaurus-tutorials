
const path = require('path');
//const versions = require('./versions.json'); // 추후지원

module.exports = {
  title: 'Docusaurus KR',
  tagline: 'Build optimized websites quickly, focus on your content',
  organizationName: 'codebachi', // Usually your GitHub org/user name.
  projectName: 'docusaurus-kr', // Usually your repo name.
  baseUrl: '/docusaurus-kr/',
  url: 'https://codebachi.github.io/docusaurus-kr',  
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  customFields: {
    description:
      'An optimized site generator in React. Docusaurus helps you to move fast and write content. Build documentation websites, blogs, marketing pages, and more.',
  },
  //clientModules: [require.resolve('./dogfooding/clientModuleExample.ts')],
  themes: ['@docusaurus/theme-live-codeblock'],
  plugins: [
    
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: 'supportus',
      content:
        '⭐️ If you like Docusaurus, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/facebook/docusaurus">GitHub</a>! ⭐️',
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    image: 'img/docusaurus-soc.png',
    // metadatas: [{name: 'twitter:card', content: 'summary'}],
    navbar: {
      hideOnScroll: true,
      title: 'Docusaurus KR',
      logo: {
        alt: 'Docusaurus KR Logo',
        src: 'img/docusaurus.svg',
        srcDark: 'img/docusaurus_keytar.svg',
      },
      items: [
        {
          to: 'docs/',
          position: 'left',
          activeBasePath: 'docs',
          label: 'Docs',          
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
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
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },  
};
