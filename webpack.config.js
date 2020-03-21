const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/client/src/index.jsx'),
  module: {
    rules: [
      {
        test: [/\.(png|jp(e*)g|svg|gif|jsx)$/],
        exclude: /node_modules/,
        use: {
          loader: ['babel-loader', 'file-loader'],
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            name: 'images/[hash]-[name].[ext]',
          },
        },
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/public'),
  },
};
