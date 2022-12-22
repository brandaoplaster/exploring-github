const path = require('path')

module.exports = {
  entry: path.relative(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.relative(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
}
