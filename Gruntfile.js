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
          src: ['css/bootstrap.min.css', 'css/bootstrap-theme.min.css', 'css/endowment.css', 'css/slidesjs.css'],
          dest: 'css/endowment.min.css'
        }]
      }
    },
    imagemin: {
      dynamic: {
        options: {
          optimizationLevel: 3
        },
        files: {
          'public/assets/candid1.jpg': 'images/candid1.jpg',
          'public/assets/candid2.jpg': 'images/candid2.jpg',
          'public/assets/candid3.jpg': 'images/candid3.jpg',
          'public/assets/candid4.jpg': 'images/candid4.jpg',
          'public/assets/candid5.jpg': 'images/candid5.jpg',
          'public/assets/candid6.jpg': 'images/candid6.jpg',
          'public/assets/candid7.jpg': 'images/candid7.jpg',
          'public/assets/lede1.jpg': 'images/lede1.jpg',
          'public/assets/lede2.jpg': 'images/lede2.jpg',
          'public/assets/lede3.jpg': 'images/lede3.jpg',
          'public/assets/lede4.jpg': 'images/lede4.jpg',
          'public/assets/lede5.jpg': 'images/lede5.jpg',
          'public/assets/lede6.jpg': 'images/lede6.jpg',
          'public/assets/lede7.jpg': 'images/lede7.jpg',
          'public/assets/lede8.jpg': 'images/lede8.jpg'
        }
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
          dest: '',
          type: 'js',
          ext: '.min.js'
        }, {
          assets: '<%= cssmin.minify.files %>',
          key: 'global',
          dest: '',
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