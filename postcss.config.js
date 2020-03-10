const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        purgecss({
            content: [
                './**/*.html',
                //Para agregar soporte para otro tipo de archivos.
                // './**/*.js',
                // './**/*.vue'
            ],
            //IMPORTANTE: Para soportar pseudo-clases
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        }),
        require('cssnano')({
            preset: 'default',
        })
    ]
}