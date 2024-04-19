import { BasePage } from "../pageObjects/basePage";

export class SavedPaymentMethodsPage extends BasePage {
  static get url() {
    return "/#/saved-payment-methods";
  }

  static get addNewCardBtn(){
    return cy.get('mat-expansion-panel');
  }

  static get nameTxtField() {
    return cy.get('[id="mat-input-1"]');
  }

  static get cardNumberTxtField() {
    return cy.get('[id="mat-input-2"]');
  }

  static get exipreMonthTxtField() {
    return cy.get('[id="mat-input-3"]');
  }

  static get exipreYearTxtField() {
    return cy.get('[id="mat-input-4"]');
  }

  static get submitBtn() {
    return cy.get('[id="submitButton"]');
  }

  static get paymentCardList(){
    return cy.get('.mat-table');
  }
}
