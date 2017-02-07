const webpack = require('webpack');
const path = require('path');

const JSDIR = path.join(__dirname, 'src');
const JSOUT = path.join(__dirname, 'dist');

module.exports = {
    //debug: true,
    entry: path.join(JSDIR, 'app.js'),
    output: {
        path: JSOUT,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin()
    ],
    stats: {
        colors: true
    },
    devtool: 'inline-source-map'
};
