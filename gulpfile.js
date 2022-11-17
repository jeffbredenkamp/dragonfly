var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require( 'gulp-dart-sass' );
var sourcemaps = require('gulp-sourcemaps');


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

// Production Build Series
gulp.task('default', gulp.series('prod-build'));