import js from "@eslint/js";
import globals from "globals";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import nextPlugin from "@next/eslint-plugin-next";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";

export default [
  // 1. Base JS rules
  js.configs.recommended,

  // 2. Apply to all source files
  {
    files: ["**/*.{js,jsx,ts,tsx}"],

    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      "@next/next": nextPlugin,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "jsx-a11y": jsxA11yPlugin,
    },

    settings: {
      react: { version: "detect" },
    },

    rules: {
      /* ----------------------------------------------------
       * NEXT.JS (Core Web Vitals subset)
       * -------------------------------------------------- */
      ...nextPlugin.configs["core-web-vitals"].rules,

      /* ----------------------------------------------------
       * TYPESCRIPT RULES
       * -------------------------------------------------- */
      ...tseslint.configs.recommended.rules,

      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",

      /* ----------------------------------------------------
       * REACT RULES
       * -------------------------------------------------- */
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/self-closing-comp": "error",
      "react/jsx-uses-vars": "error",

      /* ----------------------------------------------------
       * HOOKS RULES
       * -------------------------------------------------- */
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      /* ----------------------------------------------------
       * A11Y RULES
       * -------------------------------------------------- */
      ...jsxA11yPlugin.configs.recommended.rules,

      /* ----------------------------------------------------
       * GENERAL CODE QUALITY RULES
       * -------------------------------------------------- */
      semi: ["error", "always"],
      "prefer-const": "error",
      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
  },

  // 3. Ignore build/system files
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "dist/**",
      "build/**",
      "out/**",
    ],
  },
];
