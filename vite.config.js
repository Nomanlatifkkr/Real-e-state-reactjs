import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    sourcemap: false, // Disable source maps
  },
  build: {
    sourcemap: false, // Prevents missing .map file warnings
  },
})
