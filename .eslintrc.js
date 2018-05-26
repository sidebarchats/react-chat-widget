{
  "parser": "babel-eslint",
  "extends": "airbnb",

  "env": {
      "browser": true,
      "jest": true
  },

  "rules": {
      "camelcase": "off",
      "guard-for-in": "off",
      "no-restricted-syntax": "off",
      "arrow-parens": ["off"],
      "indent": ["warn", 2, { "SwitchCase": 1 }],
      "linebreak-style": "off",
      "space-in-parens": "off",
      "comma-dangle": "off",
      "quotes": "off",
      "keyword-spacing": "off",
      "global-require": "off",
      "padded-blocks": "off",
      "no-trailing-spaces": "off",
      "no-mixed-operators": "off",
      "prefer-const": "warn",
      "no-unused-vars": "warn",
      "max-len": ["warn", {
          "code": 250,
          "ignoreStrings": true,
          "ignoreTemplateLiterals": true,
          "ignoreTrailingComments": true
      }],
      "no-nested-ternary": "off",
      "import/no-unresolved": "off",
      "func-names": "off",
      "arrow-body-style": "off",
      "no-plusplus": "off",

      "react/jsx-no-bind": "off",
      "react/jsx-indent": ["warn", 2],
      "react/jsx-indent-props": "off",
      "react/jsx-curly-spacing": [1, {"when": "always", "children": true}],
      "react/jsx-equals-spacing": "warn",
      "react/jsx-handler-names": ["warn"],
      "react/forbid-prop-types": "off",
      "react/self-closing-comp": "warn",
      "react/no-array-index-key": "off",
      "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
      "react/jsx-sort-default-props": "warn",
      "react/jsx-sort-props": ["warn", {
          "callbacksLast": true,
          "shorthandFirst": false,
          "shorthandLast": true,
          "ignoreCase": true,
          "noSortAlphabetically": false,
          "reservedFirst": true
      }],

      "jsx-a11y/no-static-element-interactions": "off",
      "jsx-a11y/anchor-is-valid": "off",
      "jsx-a11y/click-events-have-key-events": "off",
      "jsx-a11y/no-noninteractive-element-interactions": "off",
      "jsx-a11y/label-has-for": "off"
  },
  "settings": {
      "import/resolver": {
          "webpack": {
              "extensions": [".js", ".jxs"]
          }
      }
  },

  "plugins": [
      "import",
      "promise",
      "react"
  ]
}
