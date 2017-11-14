module.exports = {
    dev: {
        bsFiles: {
            src : [
                'app/style/*.css',
                'app/*.html'
            ]
        },
        options: {
            watchTask: true,
            server: './app',
            plugins: [
                {
                    module: "bs-html-injector",
                    options: {
                        files: "./app/!*.html"
                    }
                }
            ]
        }
    }
};