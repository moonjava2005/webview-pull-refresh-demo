module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    plugins: ['react', 'react-hooks', '@typescript-eslint'],
    rules: {
        'prefer-template': 'error',
        'react/display-name': 'off',
        'no-async-promise-executor': 'off',
        'no-empty': ['error', { allowEmptyCatch: true }],
        'require-await': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'max-len': [
            'error',
            {
                code: 140,
                ignoreRegExpLiterals: true,
                ignoreTemplateLiterals: true,
                ignoreStrings: true,
                ignoreUrls: true,
            },
        ],
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
                FunctionDeclaration: { body: 1, parameters: 2 },
                CallExpression: { arguments: 'first' },
                ArrayExpression: 'first',
                ObjectExpression: 'first',
            },
        ],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'never'],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
    },
}
