/* 
  Exports overridden webpack config for tools like eslint to use
*/

process.env.NODE_ENV = process.env.NODE_ENV || "development";
// TODO: allow for custom react-scripts packages
module.exports = require('./config-overrides')(require('react-scripts/config/webpack.config.dev'));
