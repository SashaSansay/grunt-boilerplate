module.exports = {
    dev: {
        options: {
            outputStyle: 'nested',
            sourceMap: true
        },
        files: [{
            expand: true,
            cwd: 'src/style',
            src: ['*.sass'],
            dest: 'app/common/style',
            ext: '.css'
        }]
    },
    prod: {
        options: {
            outputStyle: 'compressed',
            sourceMap: false
        },
        files: [{
            expand: true,
            cwd: 'src/style',
            src: ['*.sass'],
            dest: 'app/common/style',
            ext: '.css'
        }]
    }
};