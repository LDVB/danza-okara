import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], root: './src', // Asegúrate de que este camino sea correcto
  build: {
    outDir: '../dist', // Directorio de salida para los archivos construidos
  },
})
