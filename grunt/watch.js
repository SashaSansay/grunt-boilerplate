module.exports = {
    options: {
        spawn: false // Important, don't remove this!
    },
    scripts: {
        files: [
            'src/script/*.js'
        ],
        tasks: [
            'jshint',
            'uglify:main',
            'bsReload:js'
        ]
    },

    scripts_assets: {
        files: [
            'src/assets/script/*.js'
        ],
        tasks: [
            'uglify:assets',
            'bsReload:js_assets'
        ]
    },

    css: {
        files: [
            'src/style/**/*.sass'
        ],
        tasks: [
            'sass_globbing',
            'sass:dev',
            'postcss',
            'bsReload:css'
        ]
    },

    html: {
        files: [
            'src/html/**/*.pug',
            '!src/html/component/**/*.pug'
        ],
        tasks: [
            'newer:pug:compile'
        ]
    },

    html_components: {
        files: [
            'src/html/component/**/*.pug'
        ],
        tasks: [
            'pug:compile'
        ]
    },

    copy: {
        files: [
            'src/assets/**/*', '!src/common/new/assets/**/*.js'
        ],
        tasks: [
            'newer:copy'
        ]
    },
    svg: {
        files: [
            'src/assets/icons/**.**'
        ],
        tasks: [
            'svgstore'
        ]
    }
};