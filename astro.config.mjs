import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  site: 'https://clrs4e.krishu.moe',
  integrations: [
    starlight({
      title: 'CLRS4e',
      social: {
        github: 'https://github.com/krishukr/clrs4e',
      },
      sidebar: [
        {
          label: 'Overview',
          link: '/overview',
        },
        {
          label: 'I Foundations',
          collapsed: true,
          autogenerate: {
            directory: 'section1',
          },
        },
      ],
      customCss: [
        './src/styles/theme.css',
        '@fontsource/ibm-plex-mono/400.css',
        '@fontsource/ibm-plex-mono/600.css',
        './src/styles/font.css',
        'katex/dist/katex.min.css',
        './src/styles/katex.css',
      ],
    }),
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex]
  },
});
