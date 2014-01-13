module.exports = function(grunt) {
  // Do grunt-related things in here
  
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/*.js',
        dest: 'js/endowment.min.js'
      }
    }
  });
  
  // Load plugins.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-requirejs');
  
  // Default task(s).
  grunt.registerTask('default', ['uglify']);
};