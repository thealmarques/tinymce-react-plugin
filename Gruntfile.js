module.exports = function (grunt) {
  const webpackConfig = process.env.NODE_ENV !== 'production' ? require('./webpack.dev') : require('./webpack.prod');

  grunt.initConfig({
    clean: {
      dirs: ['dist']
    },

    webpack: webpackConfig
  });

  require('load-grunt-tasks')(grunt);
};