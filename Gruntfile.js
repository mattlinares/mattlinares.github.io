module.exports = function(grunt) {

grunt.initConfig({
  uglify: {
    jquery: {
      files: {
        'assets/js/jquery.min.js': 'bower_components/jquery/src/jquery.js',
      	'assets/js/jquery.stellar.js': 'bower_components/jquery.stellar/jquery.stellar.js'
      }
    },
  },
});

grunt.loadNpmTasks('grunt-contrib-uglify');

grunt.registerTask('default', [ 'uglify', ]);

};