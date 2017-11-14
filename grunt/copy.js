module.exports = {
    main: {
        files: [
            {expand: true, flatten: true, cwd: 'src', src: ['assets/images/**/*.*'], dest: 'app/common/images/'},

            {expand: true, flatten: true, cwd: 'src', src: ['assets/images-style/**/*.*'], dest: 'app/common/images-style/'},

            {expand: true, flatten: true, cwd: 'src', src: ['assets/scripts/**/*.*'], dest: 'app/common/scripts/'},

            {expand: true, flatten: true, cwd: 'src', src: ['assets/fonts/**/*.*'], dest: 'app/common/fonts/'},

            {expand: true, flatten: true, cwd: 'src', src: ['assets/styles/**/*.*'], dest: 'app/common/styles/'}
        ]
    }
};