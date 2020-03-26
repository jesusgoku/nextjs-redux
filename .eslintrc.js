module.exports = {
  extends: ["./node_modules/poetic/config/eslint/eslint-config.js"],
  // Add custom rules here
  rules: {
    'react/jsx-filename-extension': 0,
  },
  overrides: [
    {
      files: ['src/pages/**/*'],
      rules: {
        'react/react-in-jsx-scope': 0,
      },
    },
  ],
};
