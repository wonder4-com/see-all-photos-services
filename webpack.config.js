const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/client/src/index.jsx'),
  module: {
    rules: [
      {
        test: /\.(png|jp(e*)g|svg|gif|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
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


// module.exports = {
//   entry: './client/src/index.js',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'client/dist'), //this needed to be created 
//   },
//   module: {
//     rules: [
//       {
//         test: /.js$|.jsx$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-react', '@babel/preset-env']
//           }
//         },
//       },
//     ],
//   },
// };

// name: 'images/[hash]-[name].[ext]',