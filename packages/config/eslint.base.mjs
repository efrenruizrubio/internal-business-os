import neostandard from 'neostandard'
import eslintConfigPrettier from 'eslint-config-prettier'

export const baseConfig = [
  ...neostandard({
    ts: true,
  }),
  {
    ignores: ['**/node_modules/**', '**/dist/**', '**/.next/**', '**/.turbo/**'],
  },
  eslintConfigPrettier,
]
