/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

// Load environment variables from the .env file
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
console.log('VITE_API_URL:', process.env.VITE_API_URL);
console.log('VITE_APP_ENV:', process.env.VITE_APP_ENV);

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL, // Fallback to default
        changeOrigin: true,
        secure: false,
      },
    },
  },
  define: {
    // Make VITE_API_URL available in the frontend code
    'import.meta.env.VITE_API_URL': JSON.stringify(process.env.VITE_API_URL),
  },
})

