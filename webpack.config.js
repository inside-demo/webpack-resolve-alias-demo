const path = require('path');
const webpack = require('webpack');

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
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            }
        ]
    }
};
