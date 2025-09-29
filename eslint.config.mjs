import js from "@eslint/js"
import globals from "globals"
import reactPlugin from "eslint-plugin-react"
import reactHooksPlugin from "eslint-plugin-react-hooks"
import nextPlugin from "@next/eslint-plugin-next"
import jsxA11yPlugin from "eslint-plugin-jsx-a11y"
import importPlugin from "eslint-plugin-import"
import parser from "eslint-config-next/parser.js"

const coreWebVitalsRules = nextPlugin.configs["core-web-vitals"].rules ?? {}

export default [
    {
        ignores: ["node_modules/**", ".next/**", "out/**"],
    },
    js.configs.recommended,
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        languageOptions: {
            parser,
            parserOptions: {
                requireConfigFile: false,
                sourceType: "module",
                ecmaVersion: "latest",
                allowImportExportEverywhere: true,
                babelOptions: {
                    presets: ["next/babel"],
                    caller: {
                        supportsTopLevelAwait: true,
                    },
                },
            },
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        plugins: {
            react: reactPlugin,
            "react-hooks": reactHooksPlugin,
            "@next/next": nextPlugin,
            "jsx-a11y": jsxA11yPlugin,
            import: importPlugin,
        },
        settings: {
            react: {
                version: "detect",
            },
            "import/resolver": {
                node: {
                    extensions: [".js", ".jsx", ".ts", ".tsx"],
                },
                typescript: {
                    alwaysTryTypes: true,
                },
            },
        },
        rules: {
            ...reactPlugin.configs.recommended.rules,
            ...reactHooksPlugin.configs.recommended.rules,
            ...jsxA11yPlugin.configs.recommended.rules,
            ...coreWebVitalsRules,
            "import/no-anonymous-default-export": "warn",
            "react/no-unknown-property": "off",
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off",
            "jsx-a11y/alt-text": [
                "warn",
                {
                    elements: ["img"],
                    img: ["Image"],
                },
            ],
            "jsx-a11y/aria-props": "warn",
            "jsx-a11y/aria-proptypes": "warn",
            "jsx-a11y/aria-unsupported-elements": "warn",
            "jsx-a11y/role-has-required-aria-props": "warn",
            "jsx-a11y/role-supports-aria-props": "warn",
            "react/no-unescaped-entities": "off",
            "@next/next/no-img-element": "off",
        },
    },
]
