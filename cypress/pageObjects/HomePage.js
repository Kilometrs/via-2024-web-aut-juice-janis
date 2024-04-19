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

  static get searchButton() {
    return cy.get('[id="searchQuery"]');
  }

  static get searchInputField() {
    return cy.get('[id="mat-input-0"]');
  }

  static get searchResults() {
    return cy.get('[class="ng-star-inserted"]');
  }

  static get cardByName() {
    return cy.get('[class="item-name"]');
  }

  static get itemPopup() {
    return cy.get('app-product-details');
  }

  static get closeButton() {
    return cy.get('[class="mat-focus-indicator close-dialog buttons mat-stroked-button mat-button-base"]');
  }

  static get reviewTab() {
    return cy.get('[aria-label="Expand for Reviews"]');
  }

}
