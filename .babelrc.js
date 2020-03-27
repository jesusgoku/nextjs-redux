module.exports = {
  presets: [['next/babel']],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@app': './src',
        },
      },
    ],
  ],
  env: {
    test: {
      presets: [['@babel/preset-env', { modules: false }], 'next/babel'],
    },
  },
};
