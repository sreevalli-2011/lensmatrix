import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Add this line below. Replace 'lensmatrix' if your repo name is different.
  base: '/lensmatrix/', 
})