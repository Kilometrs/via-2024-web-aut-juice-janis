import { BasePage } from "../pageObjects/basePage";

export class CreateAddressPage extends BasePage {
  static get url() {
    return "/#/address/saved";
  }

  static get countryTxtField() {
    return cy.get('[placeholder="Please provide a country."]');
  }

  static get nameTxtField() {
    return cy.get('[placeholder="Please provide a name."]');
  }

  static get numberTxtField() {
    return cy.get('[placeholder="Please provide a mobile number."]');
  }

  static get zipCodeTxtField() {
    return cy.get('[placeholder="Please provide a ZIP code."]');
  }

  static get addressTxtField() {
    return cy.get('[placeholder="Please provide an address."]');
  }

  static get cityTxtField() {
    return cy.get('[placeholder="Please provide a city."]');
  }

  static get submitBtn() {
    return cy.get('[id="submitButton"]');
  }

  static get addressList() {
    return cy.get('.mat-table');
  }


}