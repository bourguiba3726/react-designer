var path = require('path');
var webpack = require('webpack');

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx', '.js', '.css'],
    mainFields: [
      'webpack',
      'browser',
      'web',
      'browserify',
      ['jam', 'main'],
      'main',
      'index'
    ]
  },
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './examples',
    
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
  },
  devtool: "source-map",
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [
      { test: /\.(png|svg)$/, loader: 'url-loader?limit=8192' },
      {test: /\.js|\.jsx$/},
      // { test: /\.tsx?$/, loader: "ts-loader" },
      // { test: /\.js$/, loader: "source-map-loader" },
      {
        test: /^((?!\.module).)*\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.module\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]!'
        ]
      },
      {
        test: /\.js$/,
        loaders: ['react-hot-loader/webpack', 'babel-loader'],
        include: [path.join(__dirname, 'src'), path.join(__dirname, 'example')]
      }
    ]
  }
};
