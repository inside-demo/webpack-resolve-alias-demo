const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        main: './src/js/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
    },
    resolve: {
      alias: {
        'cssPath': path.resolve(__dirname, 'src/css')
      }
    },
    resolveLoader: {
        modules: ['node_modules']
    },
    plugins: [
        new webpack.DefinePlugin({
          PRODUCTION: process.env.NODE_ENV 
            ? JSON.stringify(true) 
            : JSON.stringify(false)
        }),
        new ExtractTextPlugin("styles.css")
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: [
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader'
                    }
                  ]
                })
            }
        ]
    }
};
