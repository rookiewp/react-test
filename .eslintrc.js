module.exports = {
  "env": {
    "browser": true,
    "es2020": true
  },
  "extends": [
    "airbnb-typescript",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "project": './tsconfig.json',
    "ecmaVersion": 11
  },
  "plugins": [
    "react",
    "@typescript-eslint"
  ],
  "rules": {
    "@typescript-eslint/lines-between-class-members": "off",
    "react/static-property-placement": "off",
    "react/jsx-one-expression-per-line": "off",
  }
};