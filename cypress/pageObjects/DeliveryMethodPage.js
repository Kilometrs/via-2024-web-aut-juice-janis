import { BasePage } from "../pageObjects/basePage";

export class DeliveryMethodPage extends BasePage {
  static get url() {
    return "/#/delivery-method";
  }

  static get deliveryOptionList() {
    return cy.get('[class="mat-table cdk-table"]');
  }

  static get continueBtn() {
    return cy.get('[aria-label="Proceed to delivery method selection"]');
  }
  
}