// @ts-check
import { baseConfig } from '@repo/config/eslint.base.mjs'
import globals from 'globals'
import tseslint from 'typescript-eslint'

const typeCheckedConfigs = tseslint.configs.recommendedTypeChecked.map(
  /** @param {any} config */
  (config) => {
    const { plugins, ...rest } = config
    return rest
  },
)

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...baseConfig,
  ...typeCheckedConfigs,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parserOptions: {
        projectService: {
          allowDefaultProject: ['eslint.config.mjs'],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },
]
