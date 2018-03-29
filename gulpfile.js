var gulp = require('gulp');
var del = require('del');

// Cleanup task
gulp.task('clean', function() {
  return del(['src/docs/InVisionLinks.html']);
});

// Copy libraries from /node_modules to their respective locations
gulp.task('copyJS', function() {
    gulp.src(['node_modules/bootstrap/js/**'
            ])
        .pipe(gulp.dest('assets/js/vendor/'));
});

gulp.task('copySASS', function() {
    gulp.src(['node_modules/@patternfly/patternfly-next/dist/**'])
        .pipe(gulp.dest('_sass/vendor/patternfly/'));
    gulp.src(['node_modules/bootstrap/scss/**'])
        .pipe(gulp.dest('_sass/vendor/bootstrap/'));
});

gulp.task('copyFonts', function() {
    gulp.src(['assets/overpass-webfont/**'])
        .pipe(gulp.dest('assets/fonts/overpass-webfont'));
});

gulp.task('cleanVendors', function() {
    return del([
        '_sass/vendor',
        'js/vendor',
        'fonts/**'
    ]);
});

gulp.task('cleanModules', function() {
    return del([
        'node_modules'
    ]);
});

// Run everything
gulp.task('default', [
          'copySASS',
          'copyFonts'
        ]);
