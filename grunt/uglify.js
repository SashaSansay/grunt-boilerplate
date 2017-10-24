module.exports = {
    main: {
        files: [{
            'app/common/script/main.min.js' : [
                'src/script/*.js'
            ]
        }]
    },
    assets: {
        files: [{
            'app/common/script/assets.min.js' : [
                'src/script/jquery.min.js',
                'src/script/jquery-ui.min.js',
                'src/script/jquery.inputmask.bundle.min.js',
                'src/script/*.js'
            ]
        }]
    }
};