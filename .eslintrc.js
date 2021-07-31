module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true,
        node: true,
        commonjs: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'react/display-name': 'off',
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': 'off',
        'react/prop-types': 0,
        'react/jsx-props-no-spreading': 'off',
        'react/no-unused-state': 'warn',
        'import/prefer-default-export': 0,
        'react/no-array-index-key': 0,
        camelcase: 'off',
        'no-use-before-define': 'warn',
        'import/no-named-as-default': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/forbid-prop-types': 'off',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
}
