import * as data from "../helpers/default_data.json";
import * as main_page from "../locators/main_page.json";
import * as recovery_password_page from "../locators/recovery_password_page.json";
import * as result_page from "../locators/result_page.json";

describe('Страница авторизации', function () {

    beforeEach('Начало теста', function () {
        cy.visit('/');
    })

   afterEach('Конец теста', function () {
      cy.get(main_page.title).invoke('text').then(function (text) {
         if (text.includes('Форма логина')) {
            return;
         } else {
            cy.get(result_page.close).should('be.visible');
         }
      });
   });

    it('Ввод верного логина и пароля', function () {
        cy.get(main_page.email).type(data.correct_login);
        cy.get(main_page.password).type(data.correct_password);
        cy.get(main_page.login_button).click();
        cy.get(result_page.title).should('be.visible');
        cy.get(result_page.title).contains('Авторизация прошла успешно');
     })

     it('Восстановление пароля', function () {
        cy.get(main_page.forgot_pass_btn).click();
        cy.get(recovery_password_page.email).type(data.correct_login)
        cy.get(recovery_password_page.send_button).click();
        cy.get(result_page.title).contains('Успешно отправили пароль на e-mail');
     })

     it('Ввод верного логина и неверного пароля', function () {
        cy.get(main_page.email).type(data.correct_login);
        cy.get(main_page.password).type(data.incorrect_password);
        cy.get(main_page.login_button).click();
        cy.get(result_page.title).should('be.visible');
        cy.get(result_page.title).contains('Такого логина или пароля нет');
     })

     it('Ввод неверного логина и верного пароля', function () {
        cy.get(main_page.email).type(data.incorrect_login);
        cy.get(main_page.password).type(data.correct_password);
        cy.get(main_page.login_button).click();
        cy.get(result_page.title).should('be.visible');
        cy.get(result_page.title).contains('Такого логина или пароля нет');
     })

     it('Неверный формат логина', function () {
        cy.get(main_page.email).type(data.invalid_format_login);
        cy.get(main_page.password).type(data.correct_password);
        cy.get(main_page.login_button).click();
        cy.get(result_page.title).should('be.visible');
        cy.get(result_page.title).contains('Нужно исправить проблему валидации');
     })

     it('Ввод верного логина с содержанием заглавных букв и верного пароля', function () {
        cy.get(main_page.email).type(data.correct_login_with_uppercase);
        cy.get(main_page.password).type(data.correct_password);
        cy.get(main_page.login_button).click();
        cy.get(result_page.title).should('be.visible');
        cy.get(result_page.title).contains('Авторизация прошла успешно')
     })

     it('Кнопка "Войти" выключена при пустом логине', function () {
      cy.get(main_page.password).type(data.correct_password);
      cy.get(main_page.login_button).should('be.disabled');
  });

     it('Кнопка "Войти" выключена при пустом пароле', function () {
      cy.get(main_page.email).type(data.correct_login);
      cy.get(main_page.login_button).should('be.disabled');
  });

     it('Кнопка "Войти" выключена при пустом логине и пароле', function () {
      cy.get(main_page.login_button).should('be.disabled');
  })
})