'use strict';

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  plugins: [
    'ember',
    'qunit',
    'compat'
  ],
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended',
    'plugin:compat/recommended'
  ],
  env: {
    browser: true
  },
  rules: {
    'no-mixed-spaces-and-tabs': [1,'smart-tabs'],
    'ember/no-jquery': 'error'
  },
  globals: {
    "FroalaEditor": true,
    "gapi": true,
    "google": true,
    "BoxSelect": true,
    "Dropbox": true,
    "toastr": true,
  },
  overrides: [
    // node files
    {
      files: [
        '.eslintrc.js',
        '.template-lintrc.js',
        '.template-a11y-lintrc.js',
        'ember-cli-build.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'lib/*/index.js',
        'server/**/*.js',
        'scripts/*.js'
      ],
      parserOptions: {
        sourceType: 'script'
      },
      env: {
        browser: false,
        node: true
      },
      plugins: ['node'],
      rules: Object.assign({}, require('eslint-plugin-node').configs.recommended.rules, {
        // add your custom rules and overrides for node files here
        // this can be removed once the following is fixed
        // https://github.com/mysticatea/eslint-plugin-node/issues/77
        'node/no-unpublished-require': 'off',
        'node/no-missing-require': 'off', // was failing when running eslint in github action.
        'no-console': 'off'
      })
    },
    {
      // Test files:
      files: ['tests/**/*-test.{js,ts}'],
      rules: require('eslint-plugin-qunit').configs.recommended.rules
    }
  ]
};
