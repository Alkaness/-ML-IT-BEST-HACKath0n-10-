/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                // !!! ПЕРЕВІРТЕ ЦІ РЯДКИ !!!
                'pixel': ['"Press Start 2P"', 'cursive'], // Шрифти для заголовків
                'terminal': ['"VT323"', 'monospace'],    // Шрифти для основного тексту
                // !!! ПЕРЕВІРТЕ ЦІ РЯДКИ !!!
            },
            colors: {
                retro: {
                    green: '#00FF00',
                }
            },
        },
    },
    plugins: [],
}