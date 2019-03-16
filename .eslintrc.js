module.exports = {
  // Подключим airbnb чтобы показать как можно решить конфликты одинаковых правил, объявленных в разных плагинах
  extends: ["airbnb-base"],
  plugins: ["local"],
  rules: {
    "no-restricted-imports": ["error", { patterns: ["moment"] }],
    "local/no-restricted-imports": ["warn", { patterns: ["lodash"] }],
    "local/no-restricted-syntax": [
      "error",
      {
        selector: `IfStatement`,
        message: `If - не модно, используй тернарник 💁‍`
      }
    ],
    "local/no-null": ["error"]
  }
};
