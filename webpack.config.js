const path = require('path');
module.exports = {
  entry: {
      index: './devs/js/index.js'
  },
  output: {
    path: __dirname + '/public/js',
    filename: '[name].bundle.js'
  },
  mode: 'development'
};