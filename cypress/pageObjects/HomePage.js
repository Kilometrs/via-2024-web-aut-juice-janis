import { BasePage } from "../pageObjects/basePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }

  static get accountBtn(){
    return cy.get('[id="navbarAccount"]');
  }

  static get navBarLoginBtn() {
    return cy.get('[id="navbarLoginButton"]');
  }

  static get accountDropdownAccountName() {
    return cy.get('[aria-label="Go to user profile"]');
  }

}
