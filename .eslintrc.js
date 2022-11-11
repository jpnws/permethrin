const config = {
  plugins: [
    'tailwindcss', // npm install --save-dev eslint eslint-plugin-tailwindcss
  ],
  extends: [
    'next/core-web-vitals',
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
