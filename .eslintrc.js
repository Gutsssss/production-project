module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'plugin:i18next/recommended',
        'plugin:storybook/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
        'react-hooks',
        'areuss-plugin',
        'unused-imports',
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'unused-imports/no-unused-imports': 'error',
        'no-unused-vars': 0,
        '@typescript-eslint/no-unused-vars': 2,
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'linebreak-style': ['warn', process.platform === 'win32' ? 'windows' : 'unix'],
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: ['as', 'role', 'data-testid', 'to', 'target', 'direction', 'align', 'justify', 'border'],
            },
        ],
        'max-len': ['error', { ignoreComments: true, code: 135 }],
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'no-param-reassign': 'off',
        'no-undef': 'off',
        'react/no-array-index-key': 'off',
        'areuss-plugin/imports-from-public-api': ['error', { alias: '@' }],
        'areuss-plugin/areuss-path-checker': 'error',
        'areuss-plugin/layer-imports': ['error', {
            alias: '@',
            ignoreImportPatterns: ['**/StoreProvider'],
        }],
        'react/destructuring-assignment': ['warn', 'never'],
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off',
            },
        },
        {
            files: ['.storybook/**/*.@(js|jsx|ts|tsx)'],
            rules: {
                'i18next/no-literal-string': 'off',
            },
        },
        {
            files: ['src/stories/**/*.@(js|jsx|ts|tsx)'],
            rules: {
                'i18next/no-literal-string': 'off',
                'react/no-unescaped-entities': 'off',
                'max-len': 'off',
                'no-redeclare': 'off',
            },
        },
    ],
};
