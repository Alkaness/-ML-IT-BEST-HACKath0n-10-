import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],

    // Якщо ви хочете завантажити сайт у підпапку на GitHub Pages,
    // тут має бути рядок: base: "/назва_вашого_репо/"

})