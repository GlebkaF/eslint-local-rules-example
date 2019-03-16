/**
 * В этом файле описываются правила для eslint-plugin-local.
 * Правила будут доступны под неймспейсом `local/`, ex. `local/no-restricted-syntax`.
 */
exports.rules = {
    /**
     * В eslint нет способа расширять наследованные правила,
     * чтобы не потерять настройки no-restricted-syntax из airbnb,
     * продублируем это правило в local плагине.
     */
    'no-restricted-syntax': require('eslint/lib/rules/no-restricted-syntax'),
    /**
     * В eslint нет способа настроить одно и тоже правило, так,
     * чтобы на часть кейсов кидался warn, а на другую часть error.
     * Например, при импорте moment мы хотим кидать error,
     * а на импорт lodash пока warn, чтобы не плодить слишком много ошибок разом.
     * 
     * Решим эту проблему, пробублировав правило в local плагин, тогда мы сможем описать правила так:
     * rules: {
     *   'no-restricted-imports': ['error', { patterns: ['moment'] }],
     *   'local/no-restricted-imports': ['warn', { patterns: ['lodash'] }],
     * }
     */
    'no-restricted-imports': require('eslint/lib/rules/no-restricted-imports'),
  }