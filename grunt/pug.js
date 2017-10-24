module.exports = {
    compile: {
        options: {
            client: false,
            pretty: true
        },
        files: [ {
            cwd: "src/html",
            src: ["**/[^_]*.pug", "!component/**/*.pug", "!blocks/**/*.pug", "!elements/**/*.pug"],
            dest: "app",
            expand: true,
            ext: ".html"
        } ]
    },
    component: {
        options: {
            client: false,
            pretty: true
        },
        files: [ {
            cwd: "src/html",
            // flatten: true,
            src: ["component/**/*.pug"],
            dest: "app",
            expand: true,
            ext: ".html"
        } ]
    }
};
