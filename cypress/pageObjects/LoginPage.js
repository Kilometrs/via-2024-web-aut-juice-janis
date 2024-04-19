import { BasePage } from "../pageObjects/basePage";

export class LoginPage extends BasePage {
  static get url() {
    return "/#/login";
  }

  static get elementName() {
    return cy.get("elementSelector");
  }


  static get formLoginBtn() {
    return cy.get('[id="loginButton"]');
  }

  static get emailTxtField(){
    return cy.get('[id="email"]');
  }

  static get passwordTxtField() {
    return cy.get('[id="password"]');
  }

  static get regHyperlink() {
    return cy.get('[href="#/register"]');
  }
}
