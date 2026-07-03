import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';


export default [
  {
    files: ['src/**/*.{js,mjs,cjs,ts,jsx,tsx}'],

  },
  {
    ignores: [
      'dist/**',
      'storybook-static/**',
      'coverage/**',
      'node_modules/**',
      '*.config.js',
      '*.config.ts',
    ],
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'indent': ['error', 2],
      'linebreak-style': 0, // remove due to different line feeds , windows(CRLF) && linux(LF)
      'quotes': ['error', 'single'],
      'react/jsx-closing-tag-location': 1,
      'react/jsx-curly-newline': ['error', {
        'multiline': 'consistent',
        'singleline': 'consistent'
      }
      ],
      'react/jsx-fragments': ['error', 'syntax'],
      'react/jsx-curly-spacing': ['error', { 'when': 'never' }],
      'no-unused-vars': 'off',
      'react/prop-types': 'off',
    }
  },

];


// https://github.com/jsx-eslint/eslint-plugin-react#configuration
// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
// https://andrebnassis.medium.com/setting-eslint-on-a-react-typescript-project-2021-1190a43ffba