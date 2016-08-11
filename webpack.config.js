'use strict';
// ## Webpack Configuration
// This file is used for both testing under
// [karma-webpack](https://github.com/webpack/karma-webpack)
// and [gulp-webpack](https://github.com/shama/gulp-webpack).
//
var path = require('path');

module.exports = {
  cache: true,
  entry:['./index.js'],
  // ### Output
  // karma-webpack will specify the output path when testing. This
  // setting is used for building.
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'main.js'
  },
  module: {
    // ### Loaders
    loaders: [
      // **IMPORTANT** This is needed so that each bootstrap js file required by
      // bootstrap-webpack has access to the jQuery object
      { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },

      // Needed for the css-loader when [bootstrap-webpack](https://github.com/bline/bootstrap-webpack)
      // loads bootstrap's css.
     
      { test: /\.(woff|woff2)$/,               loader: "url?limit=10000&minetype=application/font-woff" },
      { test: /\.ttf?$/,    loader: "url?limit=10000&minetype=application/octet-stream" },
      { test: /\.eot?$/,    loader: "file" },
      { test: /\.svg?$/,    loader: "url?limit=10000&minetype=image/svg+xml" }
      //*.woff?v=1.1.1      ?????????   why do we need that?? 
      // { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&minetype=application/font-woff" },  
      // { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=application/octet-stream" },
      // { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
      // { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=image/svg+xml" }
    ]
  }
};

