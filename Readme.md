Для комфортной разработки нужно установить следующие плагины:

- В VsCode:
  ESLint: dbaeumer.vscode-eslint,
  Prettier. Code formatter: esbenp.prettier-vscode,
  stylelint: stylelint.vscode-stylelint

  В settings.json файле нужно добавить такой код:

  ```json
      "scss.validate": false,
      "css.validate": false,
      "less.validate": false,
      "editor.codeActionsOnSave": {
          "source.fixAll.eslint": true,
          "source.fixAll.stylelint": true
      },
      // "Это включит авто исправление при сохранении.
  ```

  Нужно чтобы было включен formatter

- В WebStorm настроить Eslint, Stylelint.
