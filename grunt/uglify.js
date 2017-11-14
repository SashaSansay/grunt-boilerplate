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
                'src/assets/script/jquery.min.js',
                'src/assets/script/jquery-ui.min.js',
                'src/assets/script/jquery.inputmask.bundle.min.js',
                'src/assets/script/*.js'
            ]
        }]
    }
};