const path = require('path');

module.exports = {
  entry: './src/content/main.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'content.js',
    path: path.resolve(__dirname, 'build'),
  },
  devtool: 'source-map', // Add this line to generate source maps
};