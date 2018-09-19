#!/usr/bin/env node
'use strict';

process.on('unhandledRejection', function(err){
  throw err;
});

const spawn = require('cross-spawn');

const args = process.argv.slice(2);
const script = args[0];
const params = args.slice(1);

const runCommand = (result) => {
  if (result.signal) {
    console.log('Failed with ', result.signal);
    process.exit(result.status);
  };
};

switch (script) {
  case 'start':
  case 'build':
  case 'test':
    runCommand(
      spawn.sync(
        'npx',
        ['react-app-rewired', script, '--config-overrides', require.resolve('../config-overrides.js')].concat(params),
        { stdio: 'inherit' }
      )
    );
    break;
  case 'init':
    runCommand(
      spawn.sync(
        'node',
        [require.resolve('../init-eslint.js')],
        { stdio: 'inherit' }
      )
    );
    break;
  default:
    console.log('Command ' + script + ' not found.');
}
