import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

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
        './src/styles/theme.css'
      ],
    }),
  ],
});
