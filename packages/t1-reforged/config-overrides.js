const path = require('path');
const rewireEslint = require('@sowhatdoido/react-app-rewire-eslint');

module.exports = function override(config, env) {
  config = rewireEslint(config, env);
  config.resolve.alias['@'] = path.resolve('src/');
  return config;
}
