import { BasePage } from "../pageObjects/basePage";

export class RegistrationPage extends BasePage {
  static get url() {
    return "/#/registration";
  }

  static get registrationEmailField(){
    return cy.get('[id="emailControl"]');
  }

  static get regPasswordField(){
    return cy.get('[id="passwordControl"]');
  }

  static get regRepeatPasswordField(){
    return cy.get('[id="repeatPasswordControl"]');
  }

  static fillPasswordFields(psw) {
    this.regPasswordField.type(psw);
    this.regRepeatPasswordField.type(psw);
  }

  static get securityQuestionDropdown(){
    return cy.get('[class="mat-form-field-flex ng-tns-c22-16"]')
  }

  static  securityQuestionOption(opt) {
    return cy.get('[class="mat-option-text"]').contains(opt);
  }

  static get securityQuestionAnswer() {
    return cy.get('[id="securityAnswerControl"]');
  }

  static get btnRegister() {
    return cy.get('[id="registerButton"]');
  }
}