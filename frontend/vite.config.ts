import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Get the backend URL from the environment variable
const backendUrl = process.env.VITE_BACKEND_URL;

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:8080',
    },
  },
  define: {
    // Make backend URL available in the code
    'process.env.VITE_BACKEND_URL': JSON.stringify(backendUrl),
  },
})
