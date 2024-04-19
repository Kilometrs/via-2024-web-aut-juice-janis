import { BasePage } from "../pageObjects/basePage";

export class PaymentOptionsPage extends BasePage {
  static get url() {
    return "/#/payment/shop";
  }

  static get paymentCardList() {
    return cy.get('.mat-table');
  }

  static get continueBtn() {
    return cy.get('[aria-label="Proceed to review"]');
  }
}