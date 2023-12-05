module.exports = function(grunt) {
    // Configuração do Grunt
    grunt.initConfig({
    less: {
        development: {
        files: {
            'dist/style.css': 'src/style.less'
        }
        }
    },
    uglify: {
        my_target: {
        files: {
            'dist/output.min.js': ['src/input.js']
        }
        }
    }
    });

    
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    
    grunt.registerTask('default', ['less', 'uglify']);
};
