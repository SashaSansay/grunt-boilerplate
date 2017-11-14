module.exports = {
    your_target: {
        files: {
            'src/style/_blocks.sass': ['src/style/component/blocks/**/*.sass'],
            'src/style/_elements.sass': ['src/style/component/elements/**/*.sass']
        },
        options: {
            useSingleQuotes: true,
            signature: '// vtb europe !'
        }
    }
};