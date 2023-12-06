const path = require('path');

module.exports = {
  entry: {
    main5: './src/js/main5.js',
    main10: './src/js/main10.js',
    main11: './src/js/main11.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'src/public/js')
  },
  resolve: {fallback: {"path": require.resolve("path-browserify")}},
  mode: 'development'
};
