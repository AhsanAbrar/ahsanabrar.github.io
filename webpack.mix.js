let mix = require('laravel-mix')

mix.setPublicPath('./')

mix.js('src/js/main.js', 'dist/')
   .sass('src/sass/style.sass', 'dist/')
   .browserSync('ahsanabrar.dev')
