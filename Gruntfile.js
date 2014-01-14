module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    uglify: {
      options: {
        report: 'min',
        mangle: true
      },
      build: {
        files: [{
          src: ['js/*.js', '!js/endowment.min.js'],
          dest: 'js/endowment.min.js'
        }]
      }
    },
    cssmin: {
      options: {
        report: 'min'
      },
      minify: {
        files: [{
          src: ['css/*.css', '!css/*.min.css'],
          dest: 'css/endowment.min.css'
        }]
      }
    },
    imagemin: {
      dynamic: {
        options: {
          optimizationLevel: 3
        },
        files: [ {
          expand: true,
          cwd: 'images/',
          src: '*.jpg',
          dest: 'public/assets'
        } ]
      }
      
    },
    versioning: { // Task
      options: { // Task options
        cwd: 'public',
        outputConfigDir: ''
      },
      dist: { // Target
        options: { // Target options
        },
        files: [ {
          assets: '<%= uglify.build.files %>',
          key: 'global',
          dest: 'assets/',
          type: 'js',
          ext: '.min.js'
        }, {
          assets: '<%= cssmin.minify.files %>',
          key: 'global',
          dest: 'assets/',
          type: 'css',
          ext: '.min.css'
        } ]
      }
    }
  });
  
  // Load plugins.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-static-versioning');
  
  // Default task(s).
  grunt.registerTask('default', [ 'uglify', 'cssmin', 'imagemin', 'versioning' ]);
};