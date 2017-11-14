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
                    borderRadius: 0,
                    textDecoration: 0,
                    border: 0
                },
                rulesMatcher: function(rule) {
                    return !rule.selector.match(/(--|:|\+|>|~| )/);
                }
            }),
            require('autoprefixer')({browsers: 'last 20 versions'}),// add vendor prefixes
            require('cssnano')({
                preset: 'default',
                zIndex: false,
                sourcemap: true,
                safe: true
            })
        ]
    },
    dist: {
        src: './app/common/style/*.css'
    }
};