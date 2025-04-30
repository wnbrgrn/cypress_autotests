<h2>UI Автотесты на фреймворке Cypress</h2>

> **Статус проекта:**
> Публичный проект: https://login.qa.studio/
> 
> 🟢 Поддерживается (активный) 

### Описание проекта и задачи:
* Автоматизировать часть проверок регресса с помощью Cypress

### Автоматизированные тест-кейсы:
* Проверка авторизации с верным логином и верным паролем
* Проверка флоу восстановления пароля
* Проверка авторизации с верным логином и неверным паролем
* Проверка авторизации с неверным логином и верным паролем
* Проверка работы валидации на наличие @ в логине
* Авторизация с заглавными буквами в логине
* Кнопка "Войти" неактивна при пустом логине
* Кнопка "Войти" неактивна при пустом пароле
* Кнопка "Войти" неактивна при пустых полях логина и пароля

### Детали реализации:

1. baseUrl вынесен в переменные конфига

![image](https://raw.githubusercontent.com/wnbrgrn/cypress_autotests/refs/heads/main/screenshots/base_Url.png)


2. Применение хуков beforeEach и afterEach

![image](https://raw.githubusercontent.com/wnbrgrn/cypress_autotests/refs/heads/main/screenshots/hooks.png)


3. Переменные данные для авторизации вынесены в отдельный файл

![image](https://raw.githubusercontent.com/wnbrgrn/cypress_autotests/refs/heads/main/screenshots/user_data.png)


4. Каждая страница описана в формате объекта с локаторами

![image](https://raw.githubusercontent.com/wnbrgrn/cypress_autotests/refs/heads/main/screenshots/locators.png)


## Локальный запуск тестов (из терминала)
1. Скачать проект
2. Открыть терминал и перейти в директорию проекта
3. Выполнить команду:
```
npx cypress run --spec cypress/e2e/authorization_and_recovery.cy.js --browser chrome
```

**Ожидаемый результат:** получим отчёт о прохождении тестов.

![image](https://raw.githubusercontent.com/wnbrgrn/cypress_autotests/refs/heads/main/screenshots/cypress_terminal_run.png)


## Локальный запуск через Cypress UI
1. Скачать проект и открыть в терминале
2. Открыть терминал и перейти в директорию проекта
3. В терминале в папке с проектом запустить npm `npm install --save-dev cypress@12.7.0`
4. В терминале в папке с проектом запустить npm `npm i`
5. В терминале в папке с проектом запустить npm `npx cypress open`
6. Выбрать в Cypress UI E2E тестирование и браузер Google Chrome
7. Выбрать коллекцию authorization_and_recovery

**Ожидаемый результат:** получим отчёт о прохождении тестов.

![image](https://raw.githubusercontent.com/wnbrgrn/cypress_autotests/refs/heads/main/screenshots/cypress_UI_autotests.png)

> **Автор:**
> Анастасия Чапайкина
> 
> [![Telegram Badge](https://img.shields.io/badge/-Telegram-0088cc?style=flat&labelColor=0088cc&logo=telegram&logoColor=white&link=https://t.me/tja02)](https://t.me/tja02)
