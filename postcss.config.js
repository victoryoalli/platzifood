const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        purgecss({
            content: ['./**/*.html'],
            //Para agregar soporte para otro tipo de archivos.
            //content: ['./**/*.jsx'],
            //content: ['./**/*.vue'],
            //Para soportar pseudo-clases
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        }),
        require('cssnano')({
            preset: 'default',
        })
    ]
}