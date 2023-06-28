/* eslint-env node */

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@unocss',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  settings: {
    // 讓 ESLint 可以正常解析 @ 的路徑，因為我們在 vite.config.js 裡面有設定 @ 的路徑
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
        extensions: ['.js', '.vue'],
      },
    },
    // 告訴 ESLint 這些套件是安裝在 devDependencies
    'import/core-modules': [
      'vite',
      '@vitejs/plugin-vue',
      'unocss',
      'unocss/vite',
      '@unocss/preset-attributify',
      '@unocss/transformer-variant-group',
    ],
  },
  rules: {
    // 'max-len': 0,
  },
};
