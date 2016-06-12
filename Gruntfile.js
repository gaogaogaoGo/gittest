module.exports = function(grunt) {

  var sassStyle = 'expanded';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
    	output : {
        options: {
          style: sassStyle
        },
        files: {
         './develop/css/signin.css': './develop/sass/signin.scss',
         './develop/css/style.css': './develop/sass/style.scss'
        }
      }
    },
    concat: {
      options: {
        //separator: ';',
      },
      dist: {
        src: ['./develop/js/signin.js', './develop/js/test.js'],
        dest: './develop/js/global.js',
      },
    },
    uglify: {
      compressjs: {
        files: {
          './develop/js/global.min.js': ['./develop/js/global.js']
        }
      }
    },
    jshint: {
      all: ['./develop/js/global.js']
    },
    //watch 监听文件变动
    watch: {
      scripts: {
        files: ['./develop/js/signin.js', './develop/js/test.js'],
        tasks: ['concat','jshint','uglify']
      },
      sass: {
        files: ['./develop/sass/signin.scss'],
        tasks: ['sass']
      },
      livereload: {
          options: {
              livereload: '<%= connect.options.livereload %>'
          },
          files: [
              'develop/html/signin.html',
              'develop/css/signin.css',
              'develop/js/global.min.js'
          ]
      }
    },
    connect: {
      options: {
          port: 9000,
          open: true,
          livereload: 35729,
          // Change this to '0.0.0.0' to access the server from outside
          hostname: 'localhost'
      },
      server: {
        options: {
          port: 9001,
          base: './'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('outputcss',['sass']);
  grunt.registerTask('concatjs',['concat']);
  grunt.registerTask('compressjs',['concat','jshint','uglify']);
  grunt.registerTask('watchit',['sass','concat','jshint','uglify','connect','watch']);
  grunt.registerTask('default');

};
// module.exports = function(grunt){
// 	grunt.initConfig({
// 		pkg: grunt.file.readJSON('package.json'),
// 			uglify: {
// 				options: {
// 				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */n'
// 			},
// 			build: {
// 			src: 'src/test.js',
// 			dest: 'build/test.min.js'
// 			}
// 		}
// 	});
// // 加载提供”uglify”任务的插件
// grunt.loadNpmTasks('grunt-contrib-uglify');
// // 默认任务
// grunt.registerTask('default', ['uglify']);
// }