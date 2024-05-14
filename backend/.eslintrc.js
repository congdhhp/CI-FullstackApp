module.exports = {
    ignorePatterns: ['build/', 'dist/', 'node_modules/'],
    extends: ['eslint:recommended'],
    plugins: ['prettier'],
    settings: {
        // No specific settings needed for React
    },
    parserOptions: {
        ecmaVersion: 'latest', // Using the latest version of ECMAScript
        sourceType: 'module', // Support syntax of ECMAScript modules
    },
    env: {
        browser: false, // This is a Node.js app, no browser involved
        es6: true,
        node: true, // Enable Node.js global variables and Node.js scoping
    },
    rules: {
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                printWidth: 120,
                parser: 'babel-ts',
            },
        ],
        // You can customize your rules here
        'no-unused-vars': 'warn',
        'no-console': 'off', // Considering you might want to allow console logs in a Node.js app
    },
};
