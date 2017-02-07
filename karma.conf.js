const webpackConf = require('./webpack.config');

module.exports = function(conf) {
    conf.set({
       browsers: ['PhantomJS'],
       frameworks: ['jasmine'],
       reporters: ['spec'],
       specReporter: {
           suppressSkipped: true
       },
       files: [
           'src/**/*.specs.js'
       ],
       preprocessors: {
           'src/**/*.specs.js': [ 'webpack', 'sourcemap' ]
       },
       port: process.env.PORT,
       colors: true,
       autoWatch: true,
       singleRun: true,
       webpack: webpackConf
    });
};
