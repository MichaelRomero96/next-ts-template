module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'airbnb',
      'airbnb/hooks',
      'airbnb-typescript',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/jsx-runtime',
      'plugin:prettier/recommended',
    ],
    overrides: [ {
      "files": [
        "**/__tests__/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[jt]s?(x)"
      ],
      'extends': ["plugin:testing-library/react"]
    }],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: ['tsconfig.json'],
      parser: "@typescript-eslint/parser"
    },
    plugins: ['react', '@typescript-eslint', 'prettier', 'testing-library'],
    rules: {
      'react/react-in-jsx-scope': 0,
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],
      'react/prop-types': 0,
      'react/function-component-definition': [
        0,
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'no-console': 2,
      "no-param-reassign": [
        "error",
        { "props": true, "ignorePropertyModificationsFor": ["state"] }
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        { "argsIgnorePattern": "^_action$" }
      ],
    },
  }