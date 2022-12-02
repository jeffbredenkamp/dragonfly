const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require( 'gulp-dart-sass' );
const sourcemaps = require('gulp-sourcemaps');


// Scss Production Build
gulp.task('prod-build', function(done) {
    gulp.src('./src/scss/dragonfly.scss')
        .pipe(sass({
            errorLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .on('error', console.error.bind( console ))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/css/'))
    done();
});

// Scss Development Build
gulp.task('dev-build', function(done) {
    gulp.src('./src/scss/dragonfly.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            errorLogToConsole: true
        }))
        .pipe(sourcemaps.write('.'))
        .on('error', console.error.bind( console ))
        .pipe(gulp.dest('./dist/css/'))
    done();
});

// Docs Build
gulp.task('docs-build', function(done) {
    gulp.src('./docs/src/scss/docs.scss')
        .pipe(sass({
            errorLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .on('error', console.error.bind( console ))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./docs/dist/css/'))
    done();
});

gulp.task('docs-dragonfly', function(done) {
    gulp.src('./src/scss/dragonfly.scss')
        .pipe(sass({
            errorLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .on('error', console.error.bind( console ))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./docs/dist/css/'))
    done();
});

// Production Build Series
gulp.task('default', gulp.series('prod-build'));

gulp.task('docs', gulp.series('docs-build', 'docs-dragonfly'));