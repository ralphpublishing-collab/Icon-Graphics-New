import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import netlify from '@netlify/vite-plugin-tanstack-start'

export default defineConfig(({ command }) => ({
  resolve: { tsconfigPaths: true },
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: true,
  },
  plugins: [
    tailwindcss(),
    ...(command === 'build' || process.env.NETLIFY ? [netlify()] : []),
    tanstackStart({
      // Emit static HTML for every public route so static edge hosts and
      // search/social crawlers receive real pages instead of route-level 404s.
      prerender: {
        enabled: true,
        autoStaticPathsDiscovery: true,
        crawlLinks: true,
        failOnError: true,
      },
      pages: [
        {
          path: '/creative-studio',
          prerender: {
            enabled: true,
            outputPath: '/creative-studio/index.html',
            crawlLinks: false,
          },
        },
      ],
    }),
    viteReact(),
  ],
}))
