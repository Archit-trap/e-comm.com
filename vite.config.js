import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // if react; skip or change if vue/vanilla
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),  // or your framework plugin
  ],
})