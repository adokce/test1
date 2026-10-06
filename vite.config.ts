import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/test1/',
  plugins: [
    tanstackStart({
      prerender: {
        enabled: true,
        crawlLinks: false,
        failOnError: true,
      },
    }),
    react(),
  ],
})
