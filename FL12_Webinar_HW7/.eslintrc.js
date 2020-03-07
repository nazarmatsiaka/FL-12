module.exports = {
	extends: "eslint:recommended",
	env: {
		browser: true,
		es6: true
	},
	overrides: [
		{
			"files": [ "src/**/*.js" ]
		}
	],
	rules: {
		"no-console": 0,
		"no-extra-parens": ["error", "all"],
		"array-callback-return": "error",
		curly: "error",
		"default-case": "error",
		eqeqeq: ["error", "always"],
		"guard-for-in": "error",
		"no-caller": "error",
		"no-empty-function": "error",
		"no-eval": "error",
		"no-extra-bind": "error",
		"no-floating-decimal": "error",
		"no-lone-blocks": "error",
		"no-multi-spaces": "error",
		"no-new": "error",
		"no-return-assign": "error",
		"no-self-compare": "error",
		"no-useless-call": "error",
		"no-undef-init": "error",
		"block-spacing": "error",
		"brace-style": "error",
		"no-magic-numbers": ["error", { ignore: [1] }],
		"comma-dangle": ["error", "never"],
		"func-call-spacing": ["error", "never"],
		"max-len": ["error", { code: 120, ignoreComments: true }],
		"new-cap": ["error", { newIsCap: true }],
		"new-parens": "error",
		"no-nested-ternary": "error",
		"no-unneeded-ternary": "error",
		quotes: ["error", "single", { avoidEscape: true, allowTemplateLiterals: true }],
		"arrow-spacing": ["error", { before: true, after: true }],
		"no-useless-computed-key": "error",
		"no-useless-constructor": "error",
		"no-var": "warn",
		"no-unused-vars": "off"
	}
};