import { BasePage } from "../pageObjects/basePage";

export class SelectAddressPage extends BasePage {
  static get url() {
    return "/#/address/select";
  }

  static get addressList() {
    return cy.get('[class="mat-row cdk-row ng-star-inserted"]');
  }

  static get continueBtn(){
    return cy.get('[aria-label="Proceed to payment selection"]');
  }
}