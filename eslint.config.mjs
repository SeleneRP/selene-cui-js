import globals from 'globals'
import tseslint from 'typescript-eslint'

import path from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import pluginJs from '@eslint/js'

import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettier from 'eslint-plugin-prettier'

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: pluginJs.configs.recommended,
})

export default [
    { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
    ...compat.extends('standard-with-typescript'),
    ...tseslint.configs.recommended,
    eslintConfigPrettier,
    {
        plugins: ['prettier'],
        extends: ['plugin:prettier/recommended'],
        rules: {
            'prettier/prettier': 'error', // or "warn" depending on your preference
        },
    },
]
