import eslint from '@eslint/js';
import globals from 'globals';
import tseslint, { type ConfigArray } from 'typescript-eslint';
import { jsxA11yConfig } from './rules/jsxA11yConfig';

const config: ConfigArray = tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  jsxA11yConfig,
  {
    name: `Nico Ismaili's ESLint Configuration`,
    // set environments
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      quotes: [`error`, `backtick`],
      'no-console': [`error`, { allow: [`warn`, `error`, `info`] }],
    },
    ignores: [`node_modules/`, `dist/`, `build/`, `coverage/`],
  },
);

export default config;
