# Пример использования кастомных eslint правил
Стандартное api eslint не позволяет сделать эти штуки:
* добавить в проект собственные eslint правила, не публикуя их как отдельный npm пакет
* расширить нативное eslint правило, которое используется внутри плагина, не переопределяя его. Например, плагин airbnb определяет правило `no-restricted-import`, я хочу добавить запретить еще несколько собственных импортов
* на часть кейсов одного правила кидать warn, а на другую часть error. Например, я запрещаю `null` и `if` через правило `no-restricted-syntax`, я хочу кидать на `null` error, а на `if` пока warn

В этом репозитории я описал способы решения всех перечисленных проблем. Все решается установкой и правильной настройкой `eslint-plugin-local`
## Файлы
* [.eslintplugin.js](./.eslintplugin.js) - здесь мы описываем локальные правила
* [.eslintrc.js](./.eslintrc.js) - здесь мы включаем локальные правила
* [index.js](./index.js) - здесь смотрим как все работает

**После добавления новых правил в `.eslintplugin.js`,нужно перезагрузить редактор чтобы он подхватил изменения**


## Ссылки
* https://astexplorer.net/ - вставляешь код, а он показывает AST. По умолчанию eslint использует парсер `espree`
* https://eslint.org/docs/developer-guide/selectors#what-is-a-selector - дока по eslint селекторам, пригодится для составления no-restricted-syntax правил и написания правил
