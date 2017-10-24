module.exports = {

    options: {
        reporter: require('jshint-stylish'),
        '-W100': true
    },

    main: [
        'src/scripts/*.js'
    ]
};