import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'assets/images/logo.png'],
      manifest: {
        name: 'SoleMatch Foot Measurement',
        short_name: 'SoleMatch',
        description: 'AI-Powered Foot Sizing for Enterprise',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'assets/images/logo.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'assets/images/logo.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})
