module.exports =
  {
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:@prettier/recommended",
      "plugin:react-hooks/recommended"
    ],
    parser: "@typescript-eslint/parser",
    env: { browser: true, es2020: true },
    settings: { react: { version: "18.2" } },
    plugins: ["@typescript-eslint", "prettier", "react-refresh"],
    files: [
      "**/*.ts",
      "**/*.cts",
      "**.*.mts"
    ],
    rules: {
      "semi": "error",
      "prefer-const": "error",
      "prettier/prettier": "error",
      "spaced-comment": "off",
      "no-console": "warn",
      "consistent-return": "off",
      "func-names": "off",
      "object-shorthand": "off",
      "no-process-exit": "off",
      "no-param-reassign": "off",
      "no-return-await": "off",
      "no-underscore-dangle": "off",
      "class-methods-use-this": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true }
      ],
      "prefer-destructuring": ["error", { "object": true, "array": false }],
      "no-unused-vars": ["error", { "argsIgnorePattern": "req|res|next|val" }]
    },
    ignores: [".dist/*"],
    root: true
  };
