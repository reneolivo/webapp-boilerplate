const webpackConf = require('./webpack.config');

module.exports = function(conf) {
    conf.set({
       browsers: ['Chrome'],
       frameworks: ['jasmine'],
       reporters: ['spec'],
       specReporter: {
           suppressSkipped: true
       },
       files: [
           'src/**/*.spec.js'
       ],
       preprocessors: {
           'src/**/*.spec.js': [ 'webpack', 'sourcemap' ]
       },
       port: process.env.PORT,
       colors: true,
       autoWatch: true,
       singleRun: true,
       webpack: webpackConf
    });
};
