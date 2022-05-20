let mix = require('laravel-mix');
const HtmlWebpackPlugin = require('html-webpack-plugin')


// npx mix
// npx mix watch


// mix.js('src/js/app.js', 'dist/app.js')
// mix.js(['src/app.js', 'src/asd.js'], 'dist/app.js');

// mix.sass('src/scss/main.scss', 'css')
// mix.less('src/less/main.less', 'css');

// mix.copyDirectory("src/images/", "dist/images")           // копіює
// mix.copyDirectory("src/fonts/", "dist/fonts")


 // Для базової конкатенації та мінімізації файлів Mix допоможе вам.
 // для  цілих папок 
//  mix.combine('src/js', 'src/js/all-files.js');

 // для масивів файлів 
// mix.combine(                       
//     [
//         "src/app.js",
//         "src/asd.js"
//     ],
//     "src/app.js"
// );


mix.copyDirectory("src/index.html", "dist")
mix.copyDirectory("src/images", "dist/images")

mix.js('src/js/app.js', 'dist/app.js').sass('src/scss/main.scss', 'dist/main.css');


mix.browserSync({
    server: 'dist',
    files: ['./src']          // слідкує за всіма змінами
});

// mix.browserSync('my-domain.test');
// mix.browserSync();
// mix.browserSync('localhost');
// mix.browserSync('localhost:8000');
// mix.browserSync({
//     proxy: "http://localhost:8000"
// });
// mix.browserSync('http://your-app.test');
// mix.browserSync({proxy: "http://localhost:3000"});
// mix.browserSync({
//     server: {
//       baseDir: '.',
//       index: 'index.html',
//     },
//     port: 3000,
//     proxy: false,
//     files: '**/*',
//   });


// // Скопіюйте один файл
// mix.copy('src/js/app.js', 'src/mainjs/app.js');
// // Скопіюйте кілька файлів
// mix.copy([
//     'src/js/bar.js',
//     'src/js/foo.js'
// ], 'src/mainjs/app.js');

// // Об’єднати всі відповідні файли в каталог
// mix.combine('path/to/dir/*.css', 'all-files.css');
// // or:
// mix.styles('path/to/dir/*.css', 'all-files.css');


// // Складіть JavaScript з підтримкою React
// mix.js('src/app.js', 'js')
//     .react();