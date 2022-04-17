import gulp from 'gulp';
import plumber from 'gulp-plumber';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import browser from 'browser-sync';
import csso from 'postcss-csso';
import rename from 'gulp-rename';
import htmlmin from 'gulp-htmlmin';
import terser from 'gulp-terser';
import squoosh from 'gulp-libsquoosh';
import svgo from 'gulp-svgmin';
import del from 'del';

// Styles

export const styles = () => gulp
  .src('css/styles.css', { sourcemaps: true })
  .pipe(plumber())
  .pipe(postcss([autoprefixer(), csso()]))
  .pipe(rename('style.min.css'))
  .pipe(gulp.dest('build/css', { sourcemaps: '.' }))
  .pipe(browser.stream());

// HTML

const html = () => gulp
  .src('*.html')
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(gulp.dest('build'));

// Scripts .pipe(terser())

const scripts = () => gulp
  .src('js/*.js')

  .pipe(gulp.dest('build/js'))
  .pipe(browser.stream());

// Images

const optimizeImages = () => gulp
  .src('img/**/*.{png,jpg}')
  .pipe(squoosh())
  .pipe(gulp.dest('build/img'));

const copyImages = () => gulp.src('img/**/*.{png,jpg}').pipe(gulp.dest('build/img'));

// WebP

const createWebp = () => gulp
  .src('img/**/*.{png,jpg}')
  .pipe(
    squoosh({
      webp: {},
    })
  )
  .pipe(gulp.dest('build/img/'));

// SVG

const svg = () =>
  gulp.src('img/*.svg').pipe(svgo()).pipe(gulp.dest('build/img'));

// Copy

const copy = (done) => {
  gulp.src('fonts/*.{woff2,woff}').pipe(gulp.dest('build/fonts'));
  gulp.src('favicon.ico').pipe(gulp.dest('build'));
  done();
};

// Clean

const clean = () => del('build');

// Server

const server = (done) => {
  browser.init({
    server: {
      baseDir: 'build',
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
};

// Reload

const reload = (done) => {
  browser.reload();
  done();
};

// Watcher

const watcher = () => {
  gulp.watch('css/*.css', gulp.series(styles)).on('change', browser.reload);
  gulp.watch('js/*.js', gulp.series(scripts)).on('change', browser.reload);
  gulp.watch('*.html', gulp.series(html)).on('change', browser.reload);
};

// Build

export const build = gulp.series(
  clean,
  copy,
  optimizeImages,
  gulp.parallel(styles, html, scripts, svg, createWebp)
);

// Default

export default gulp.series(
  clean,
  copy,
  copyImages,
  gulp.parallel(styles, html, scripts, svg, createWebp),
  gulp.series(server, watcher)
);
