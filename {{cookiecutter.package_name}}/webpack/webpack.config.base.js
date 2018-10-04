const path = require('path')

module.exports = {
  entry: path.join(__dirname, '../src/index.js'),

  output: {
    path: path.join(__dirname, '../dist'),
    filename: '{{ cookiecutter.package_name }}.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, '../src'),
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader'
        }]
      }
    ]
  }
}
