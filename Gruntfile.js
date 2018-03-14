module.exports = function(grunt) {
    require('time-grunt')(grunt);

    require('load-grunt-config')(grunt, {
        jitGrunt: true
    });

    grunt.registerTask('dev', ['browserSync', 'watch']);

    grunt.registerTask('build', [
        'uglify:main',//compress main js
        'uglify:assets',//compress vendor js
        'sass_globbing',//globbing blocks and elements sass
        'sass:prod',//compile prod version of sass
        'postcss',//post process css
        'pug:compile',//compile html
        'copy',//copy all assets
        'svgstore'//do svg sprite
    ]);
};