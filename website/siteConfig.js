// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const users = [
  { caption: 'Frank Tasillo, Co-Chair (IHS Markit)', pinned: true },
  { caption: 'Amber Baldet, Co-Chair (Clovyr)', pinned: true },
  { caption: 'Patrick Nielsen, Participant (Clovyr)'  }
];

const siteConfig = {
  title: 'Open Source Readiness',
  tagline: 'FINOS OSR - Open Source Readiness in Finance',
  url: 'https://grizzwolf.github.io/finos-osr/',
  //cname: 'decentralized.finos.org',
  baseUrl: '/finos-osr/',
  projectName: 'finos-osr',
  organizationName: 'grizzwolf',
  headerLinks: [
    {doc: 'learn-more', label: 'Learn More'},
    {doc: 'projects', label: 'Projects'},
    { blog: true, label: 'News' },
  ],
  headerIcon: 'img/osr-icon-2019.png',
  footerIcon: 'img/osr-icon-2019.png',
  favicon: 'img/favicon/favicon.ico',
  colors: {
    primaryColor: '#0086bf',
    secondaryColor: '#000000',
  },

  // If you have users set above, you add it here:
  users,

  copyright: `Copyright © ${new Date().getFullYear()} FINOS - The Fintech Opensource Foundation`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  wrapPagesHTML: true,
  docsSideNavCollapsible: true,

  twitterUsername: 'finos',
  // Open Graph and Twitter card images.
  ogImage: 'img/deg-logo-white.png',
  twitterImage: 'img/deg-logo-white.png',

  // Show documentation's last contributor's name.
  enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/grizzwolf/finos-deg'
};

module.exports = siteConfig;
