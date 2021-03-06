module.exports = {
  parser: "babel-eslint",
  extends: [
    "airbnb",
    "prettier",
    "plugin:compat/recommended",
    "plugin:jest/recommended",
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true,
  },
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
      arrowFunctions: true,
      classes: true,
      modules: true,
      defaultParams: true,
    },
    sourceType: "module",
  },
  rules: {
    "no-nested-ternary": 0,
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "no-console": 0,
    "no-return-assign": 0,
    "no-param-reassign": ["error", { props: false }],
    "import/prefer-default-export": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-wrap-multilines": 0,
    "react/prop-types": 0,
    "react/forbid-prop-types": 0,
    "react/jsx-one-expression-per-line": 0,
    "import/no-unresolved": [2, { ignore: ["^@/"] }],
    "import/no-cycle": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "linebreak-style": 0,
    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/label-has-associated-control": 0,
  },
  overrides: [
    {
      files: ["*.test.js", "*.test.ts", "*.test.jsx", "*.test.tsx"],
      env: {
        jest: true, // now **/*.test.js files' env has both es6 *and* jest
      },
      plugins: ["jest"],
      rules: {
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error",
      },
    },
  ],
  settings: {
    polyfills: ["fetch", "promises", "url", "object-assign", "Promise"],
  },
};
