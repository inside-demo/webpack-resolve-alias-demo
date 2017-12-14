const path = require('path');

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
