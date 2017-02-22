var gulp = require('gulp');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var notify = require('gulp-notify');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();
var pkg = require('./package.json');
var del = require('del');
var marked = require('marked');
var fs = require('fs');
var refresh = require('gulp-refresh')

var uxLinks = fs.readFileSync('src/docs/InVisionLinks.md', 'utf-8');
var markdownMD = marked(uxLinks);

gulp.task('markdown', ['clean'], function () {
    fs.writeFileSync('src/docs/InVisionLinks.html', markdownMD);
    return gulp.src('src/docs/InVisionLinks.html')
        .pipe(notify('markdown compiled'));
});
// ensure markdown finishes, reloads browser
gulp.task('markdown-watch', ['markdown'], function (done) {
    browserSync.reload();
    done();
});

marked.setOptions({
  renderer: new marked.Renderer(),
  html: false,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

// Cleanup task
gulp.task('clean', function() {
  // You can use multiple globbing patterns as you would with `gulp.src`
  return del(['src/docs/InVisionLinks.html']);
});

// Sass compiler
gulp.task('sass', function () {
  return gulp.src('app/sass/**.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css/'))
        .pipe(browserSync.stream())
    .pipe(notify("CSS Compiled"));
});
// ensure sass finishes, reloads browser
gulp.task('sass-watch', ['sass'], function (done) {
    browserSync.reload();
    done();
});

// Copy libraries from /node_modules to their respective locations
gulp.task('copy', function() {
    gulp.src(['node_modules/patternfly/node_modules/jquery/dist/jquery.min.js'])
        .pipe(gulp.dest('src/js'))
});

// Configure the browserSync task
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: './'
        },
    });
    gulp.watch('app/sass/**.scss', ['sass-watch']);
    gulp.watch('src/docs/*.md', ['markdown-watch']);
    gulp.watch('**/*.html').on('change', browserSync.reload);
});

// Run everything
gulp.task('default', ['sass', 'copy', 'markdown']);
