module.exports = {
  "extends": [
    "stylelint-config-palantir",
    "stylelint-config-palantir/sass.js",
  ],
  "rules": {
    "indentation": 2,
    "number-leading-zero":"never",
    'at-rule-no-unknown':[true,
      {
        ignoreAtRules: [
        // additional scss at-rules:
          "content", "each", "else", "error", "extend", "for", "function", "if", "include", "mixin", "return", "use", "forward"
        ],
      }
    ],
    "at-rule-empty-line-before": ["always", {
      "except": ["after-same-name", "inside-block"],
        "ignoreAtRules": ["include", "mixin", "function"]
    }],
    "order/order": [
      [
        "custom-properties",
        "at-variables",
        "dollar-variables",
        "less-mixins",
        /*
        {
          "type": "at-rule",
          "name": "include"
        },*/
        "declarations",
        "rules",
      ],
      { unspecified: "ignore" },
    ],
  }
}
