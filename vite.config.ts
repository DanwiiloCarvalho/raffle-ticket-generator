import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/raffle-ticket-generator',
  server: {
    host: "0.0.0.0"
  }
})
