const config = {
  plugins: [
    'functional', // npm install --save-dev eslint @typescript-eslint/parser tsutils eslint-plugin-functional
    'tailwindcss', // npm install --save-dev eslint eslint-plugin-tailwindcss
  ],
  extends: [
    'next/core-web-vitals',
    'plugin:functional/recommended', // npm install --save-dev eslint @typescript-eslint/parser tsutils eslint-plugin-functional
    'plugin:tailwindcss/recommended', // npm install --save-dev eslint eslint-plugin-tailwindcss
    'prettier', // npm install --save-dev eslint-config-prettier (must be last in the extends array)
  ],
  rules: {
    'functional/no-expression-statement': 'off',
  },
};

module.exports = {
  ...config,
};
