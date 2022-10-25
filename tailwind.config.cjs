const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.tsx'],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            neutral: colors.neutral,
            slate: colors.slate,
            blue: colors.blue,
            sky: colors.sky,
        },
        extend: {},
    },
    plugins: [],
}
