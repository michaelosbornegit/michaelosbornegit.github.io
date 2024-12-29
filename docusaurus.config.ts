import { themes as prismThemes } from 'prism-react-renderer';
import type { Config, Plugin } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import 'dotenv/config';

const config: Config = {
  title: 'Mikeys World',
  tagline: 'software engineering nerd',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https://mikeys.world',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'michaelosbornegit', // Usually your GitHub org/user name.
  projectName: 'michaelosbornegit.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-GLPC4RS352',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social-banner.png',
    navbar: {
      title: 'Mikeys World',
      logo: {
        alt: 'Mikeys World Logo',
        src: 'img/favicon.svg',
      },
      items: [
        { to: '/posts', label: 'Posts', position: 'left' },
        { to: '/about', label: 'About', position: 'left' },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Collections',
          items: [
            {
              label: 'Posts',
              to: '/posts',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/michaelosbornegit',
            },
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/in/michael-osborne-cs/',
            },
            {
              label: 'Hit me up on Discord - Username: bigmike2biggermike',
              href: 'https://discord.com',
            }
          ],
        },
      ],
      copyright: `Built with Docusaurus.`,
    },
    zoom: {
      selector: 'article img',
      background: {
        light: 'rgba(0, 0, 0, 30%)',
        dark: 'rgba(0, 0, 0, 30%)'
      },
      config: {
        container: {
          // Make sure the zoom doesn't show under the navbar
          top: 60
        }
      }
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    'docusaurus-plugin-image-zoom',
    // Use custom blog plugin to rename to posts and pass them to homepage
    [
      './plugins/custom-blog-posts-plugin',
      {
        id: 'posts',
        routeBasePath: 'posts',
        path: './posts',
        blogTitle: 'Posts',
        blogDescription: 'My Posts',
      },
    ],
  ],
};

export default config;
