import { BasePage } from "../pageObjects/basePage";

export class SavedAddressesPage extends BasePage {
  static get url() {
    return "/#/address/create";
  }

  static get addNewAddressBtn() {
    return cy.get('[aria-label="Add a new address"]');
  }

}