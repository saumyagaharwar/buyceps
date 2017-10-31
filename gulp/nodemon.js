'use strict'

module.exports = function(gulp, browserSync) {

    return function(cb) {
        var nodemon = require('gulp-nodemon');
        var called = false;

        return nodemon({
            script: 'server.js',
            ignore: [
                'gulpfile.js',
                'node_modules/'
            ]
        })
        .on('start', function() {
            if(!called) {
                called = true;
                cb();
            }
        })
        .on('restart', function() {
            setTimeout(function() {
                browserSync.reload({stream: false});
            }, 1000);
        });

    };

};