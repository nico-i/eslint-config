import { resolve } from 'path';
import tseslint from 'typescript-eslint';

const projectTsConfig = resolve(process.cwd(), `.`, `tsconfig.json`);

export default tseslint.config(
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  {
    name: `Nico Ismaili's ESLint Configuration`,
    rules: {
      quotes: [`error`, `backtick`],
    },
    ignores: [`node_modules/`, `dist/`, `build/`, `coverage/`],
    settings: {
      'import/resolver': {
        typescript: {
          project: projectTsConfig,
        },
      },
    },
  },
);
