import type { Linter } from 'eslint/universal';
import { jsxA11yConfig } from './rules/jsxA11yConfig';

const config: Linter.Config[] = [
  jsxA11yConfig,
  {
    name: `Nico Ismaili's ESLint Configuration`,
    rules: {
      quotes: [`error`, `backtick`],
      'no-unused-vars': ['error'],
    },
    ignores: [`node_modules/`, `dist/`, `build/`, `coverage/`],
  },
];

export default config;
