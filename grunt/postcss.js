module.exports = {
    options:{
        processors: [
            require('postcss-initial')({
                reset: 'inherited' // reset only inherited rules
            }),
            require('postcss-autoreset')({
                reset: {
                    margin: 0,
                    padding: 0,
                    borderRadius: 0
                }
            }),
            require('autoprefixer')({browsers: 'last 20 versions'}),// add vendor prefixes
            require('cssnano')()
        ]
    },
    dist: {
        src: './app/common/style/*.css'
    }
};