var webpack = require('webpack');

module.exports = options => {
  return {
    entry: './index.js',
    output: {
      filename: 'bundle.js',
    },
    plugins: [
      new webpack.DefinePlugin({ // <-- key to reducing React's size
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin(), //minify everything
      new webpack.optimize.AggressiveMergingPlugin()//Merge chunks
    ],
    module: {
      rules: [
        {
          test: /.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
              },
            },
          ],
        },
        {
          test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }
      ],
    },
  }
}
