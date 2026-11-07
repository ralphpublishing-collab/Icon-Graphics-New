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
