'use strict'

module.exports = function(gulp, less, conf) {
    return function() {
        gulp.src('src/assets/less/main.less')
        .pipe(less())
        .pipe(gulp.dest(conf.paths.build+'/styles'));
    };
};