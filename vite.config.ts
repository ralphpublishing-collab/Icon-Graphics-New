import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  resolve: { tsconfigPaths: true },
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: true,
  },
  plugins: [
    tailwindcss(),
    tanstackStart({
      prerender: {
        enabled: true,
        autoStaticPathsDiscovery: true,
        autoSubfolderIndex: true,
        crawlLinks: true,
        concurrency: 4,
        failOnError: true,
        retryCount: 2,
      },
      pages: [
        { path: '/insights/prepare-a-creative-brief' },
        { path: '/insights/plan-your-business-website' },
        { path: '/insights/prepare-media-project-references' },
        { path: '/insights/the-power-of-visual-communication' },
        { path: '/insights/why-brand-photography-matters' },
        { path: '/insights/building-a-social-media-strategy' },
        { path: '/insights/smart-digital-marketing-beyond-the-ads' },
        { path: '/insights/the-art-of-business-writing' },
        { path: '/insights/the-power-of-professional-documentation' },
        { path: '/insights/sound-branding-the-power-of-audio' },
        { path: '/portfolio/erin-fashion-world' },
        { path: '/portfolio/lewa-glam-beauty-empire' },
        { path: '/portfolio/opeyemi-beauty-touch' },
        { path: '/portfolio/global-trade-connect' },
        { path: '/portfolio/nova-global-brands' },
      ],
    }),
    viteReact(),
  ],
})
