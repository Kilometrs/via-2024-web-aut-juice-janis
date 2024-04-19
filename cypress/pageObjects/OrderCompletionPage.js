import { BasePage } from "../pageObjects/basePage";

export class OrderCompletionPage extends BasePage {
  static get url() {
    return "/#/order-summary";
  }

  static get orderDetails() {
    return cy.get('[class="confirmation"]');
  }


}