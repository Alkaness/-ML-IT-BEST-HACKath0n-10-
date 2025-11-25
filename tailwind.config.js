/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                // Ось тут ми зв'язуємо назви класів з реальними шрифтами
                'pixel': ['"Press Start 2P"', 'cursive'],
                'terminal': ['"VT323"', 'monospace'],
            },
            colors: {
                retro: {
                    bg: '#050505',
                    green: '#00FF00',
                    dimGreen: 'rgba(0, 255, 0, 0.1)',
                }
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(-10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}