const nodeExternals = require('webpack-node-externals');
const path = require('path');

const {
  NODE_ENV = 'production',
} = process.env;

module.exports = {
  entry: './app.prod.js',
  mode: NODE_ENV,
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.js'],
  },
  externals: [nodeExternals()]
}
