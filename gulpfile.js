var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var pkg = require('./package.json');

// Copy libraries from /node_modules to their respective locations
gulp.task('copy', function() {
    gulp.src(['node_modules/patternfly/dist/css/**'])
        .pipe(gulp.dest('site/css'))

    gulp.src(['node_modules/patternfly/dist/js/patternfly.min.js', 'node_modules/patternfly/node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/patternfly/node_modules/jquery/dist/jquery.min.js'])
        .pipe(gulp.dest('site/js'))

    gulp.src([
            'node_modules/patternfly/dist/fonts/**',
        ])
        .pipe(gulp.dest('site/fonts'))
});

// Configure the browserSync task
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: './'
        },
    })
});

// Run everything
gulp.task('default', ['copy']);
