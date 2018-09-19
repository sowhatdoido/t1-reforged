module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: [
    'react-app',
    'airbnb'
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: require.resolve('t1-reforged/webpack.config.js'),
      },
    },
  },
  rules: {
    // require file extensions for all files except the ones listed
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
      },
    ],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['.storybook/**', '**/*.stories.jsx'],
      },
    ],
    // disable warning for linebreak styles for cross platform development
    // TODO: we should find a way to fix this from the dev environment level
    'linebreak-style': 'off',
  },
};