import { describe, expect, test } from 'bun:test';
import { ESLint } from 'eslint';
import config from './index.js';

describe(`ESLint Configuration`, () => {
  test(`should load config as valid in ESLint and apply rules correctly`, async () => {
    const eslintConfig = new ESLint({
      baseConfig: config as never,
    });

    const results = await eslintConfig.lintText(`const a = '1';`);

    const expectedFirstMsg = `'a' is assigned a value but never used.`;
    const firstMsg = results[0]?.messages[0]?.message;

    expect(firstMsg).toBe(expectedFirstMsg);

    const expectedSecondMsg = `Strings must use backtick.`;
    const secondMsg = results[0]?.messages[1]?.message;

    expect(secondMsg).toBe(expectedSecondMsg);
  });
});
