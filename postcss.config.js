module.exports = {
    plugins: {
        // ЗАМІНЮЄМО: 'tailwindcss': {}
        // НА ЦЕ:
        tailwindcss: require('tailwindcss'),
        autoprefixer: require('autoprefixer'),
    },
}