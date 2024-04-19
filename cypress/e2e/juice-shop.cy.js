import { HomePage } from "../pageObjects/HomePage";
const {LoginPage} = require("../pageObjects/LoginPage");
const {RegistrationPage} = require("../pageObjects/RegistrationPage");
const {BasketPage} = require("../pageObjects/BasketPage");
const {SelectAddressPage} = require("../pageObjects/SelectAddressPage");
const { DeliveryMethodPage } =require( "../pageObjects/DeliveryMethodPage");
const {PaymentOptionsPage} = require("../pageObjects/PaymentOptionsPage");
const {OrderSummaryPage} = require("../pageObjects/OrderSummaryPage");
const {OrderCompletionPage} = require("../pageObjects/OrderCompletionPage");

describe("Juice-shop scenarios", () => {
  context("Without auto login", () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
    });

    it("Login", () => {
      // Click Account button
      HomePage.accountBtn.click();
      // Click Login button
      HomePage.navBarLoginBtn.click();
      // Set email value to "demo"
      LoginPage.emailTxtField.type("demo");
      // Set password value to "demo"
      LoginPage.passwordTxtField.type("demo");
      // Click Log in
      LoginPage.formLoginBtn.click();
      // Click Account button
      HomePage.accountBtn.click();
      // Validate that "demo" account name appears in the menu section
      HomePage.accountDropdownAccountName.contains('demo');
    });

    it("Registration", () => {
      // Click Account button
      HomePage.accountBtn.click();
      // Login button
      HomePage.navBarLoginBtn.click();
      // Click "Not yet a customer?"
      LoginPage.regHyperlink.click();
      // Find - how to generate random number in JS
      const randomNumber = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
      // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
      // Save that email address to some variable
      const email = "email_" +  randomNumber + "@shrexbox.com";
      RegistrationPage.registrationEmailField.type(email);
      // Fill in password field and repeat password field with same password
      const password = "JanisIrKruc369-";
      RegistrationPage.fillPasswordFields(password);
      // Click on Security Question menu
      RegistrationPage.securityQuestionDropdown.click();
      // Select  "Name of your favorite pet?"
      RegistrationPage.securityQuestionOption("Name of your favorite pet?").click();
      // Fill in answer
      RegistrationPage.securityQuestionAnswer.type("Shrek");
      // Click Register button
      RegistrationPage.btnRegister.click();
      // Set email value to previously created email
      LoginPage.emailTxtField.type(email);
      // Set password value to previously used password value
      LoginPage.passwordTxtField.type(password);
      // Click login button
      LoginPage.formLoginBtn.click();
      // Click Account button
      HomePage.accountBtn.click();
      // Validate that account name (with previously created email address) appears in the menu section
      HomePage.accountDropdownAccountName.contains(email);
    });
  });

  context("With auto login", () => {
    beforeEach(() => {
      cy.login("demo", "demo");
      HomePage.visit();
    });

    it("Search and validate Lemon", () => {
      // Click on search icon
      HomePage.searchButton.click();
      // Search for Lemon
      HomePage.searchInputField.type("Lemon{enter}");
      // Select a product card - Lemon Juice (500ml)
      HomePage.cardByName.contains("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.itemPopup.contains("Sour but full of vitamins.");
    });

    it("Search and validate Lemon /w multiple cards", () => {
      // Click on search icon
      HomePage.searchButton.click();
      // Search for 500ml
      HomePage.searchInputField.type("500ml{enter}")
      // Select a product card - Lemon Juice (500ml)
      HomePage.cardByName.contains("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.itemPopup.contains("Sour but full of vitamins.");
    });

    // Create scenario - Search 500ml and validate cards
    it("Search 500ml and validate cards",  () => {
      // Click on search icon
      HomePage.searchButton.click();
      // Search for 500ml
      HomePage.searchInputField.type("500ml{enter}")
      // Select a product card - Eggfruit Juice (500ml)
      HomePage.cardByName.contains("Eggfruit Juice (500ml)").click();
      // Validate that the card (should) contains "Now with even more exotic flavour."
      HomePage.itemPopup.contains("Now with even more exotic flavour.");
      // Close the card
      HomePage.closeButton.click();
      // Select a product card - Lemon Juice (500ml)
      HomePage.cardByName.contains("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.itemPopup.contains("Sour but full of vitamins.");
      // Close the card
      HomePage.closeButton.click();
      // Select a product card - Strawberry Juice (500ml)
      HomePage.cardByName.contains("Strawberry Juice (500ml)").click();
      // Validate that the card (should) contains "Sweet & tasty!"
      HomePage.itemPopup.contains("Sweet & tasty!");
    });

    // Create scenario - Read a review
    it("Read a review", () => {
      // Click on search icon
      HomePage.searchButton.click();
      // Search for King
      HomePage.searchInputField.type("King{enter}");
      // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
      HomePage.cardByName.contains("King of the Hill").click();
      // Click expand reviews button/icon (wait for reviews to appear)
      cy.wait(200);
      HomePage.reviewTab.click();
      // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
      HomePage.searchResults.contains("K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!");
    });

    // Create scenario - Add a review
    it("Add a review", () => {
      // Click on search icon
      HomePage.searchButton.click();
      // Search for Raspberry
      HomePage.searchInputField.type("Raspberry{enter}");
      // Select a product card - Raspberry Juice (1000ml)
      HomePage.cardByName.contains("Raspberry Juice (1000ml)").click();
      // Type in review - "Tastes like metal"
      cy.wait(200);
      HomePage.reviewTextField.type("Tastes like metal");
      // Click Submit
      HomePage.submitReviewButton.click();
      // Click expand reviews button/icon (wait for reviews to appear)
      cy.wait(200);
      HomePage.reviewTab.click();
      // Validate review -  "Tastes like metal"
      HomePage.searchResults.contains("Tastes like metal");

    });

    // Create scenario - Validate product card amount
    it("Validate product card amount", () => {
      // Validate that the default amount of cards is 12
      HomePage.cardList.should("have.length", 12);
      // Change items per page (at the bottom of page) to 24
      HomePage.showCardCount.click();
      HomePage.cardCountDropdownOption.contains("24").click();
      // Validate that the amount of cards is 24
      HomePage.cardList.should("have.length", 24);
      // Change items per page (at the bottom of page) to 36
      HomePage.showCardCount.click();
      HomePage.cardCountDropdownOption.contains("36").click();
      // Validate that the amount of cards is 35
      HomePage.cardList.should("have.length", 35);
    });

    // Create scenario - Buy Girlie T-shirt
    it.only("Buy Girlie T-shirt", () => {
      // Click on search icon
      HomePage.searchButton.click();
      // Search for Girlie
      HomePage.searchInputField.type("Girlie{enter}");
      // Add to basket "Girlie"
      HomePage.addToBasketBtn.click();
      // Click on "Your Basket" button
      HomePage.openCartBtn.click();
      // Create page object - BasketPage
      // Click on "Checkout" button
      BasketPage.checkoutButton.click();
      // Create page object - SelectAddressPage
      // Select address containing "United Fakedom"
      SelectAddressPage.addressList.contains("United Fakedom").click();
      // Click Continue button
      SelectAddressPage.continueBtn.click();
      // Create page object - DeliveryMethodPage
      // Select delivery speed Standard Delivery
      DeliveryMethodPage.deliveryOptionList.contains("Standard Delivery").click();
      // Click Continue button
      DeliveryMethodPage.continueBtn.click();
      // Create page object - PaymentOptionsPage
      // Select card that ends with "5678"
      PaymentOptionsPage.paymentCardList
      .contains("5678")
      .closest('mat-row')
      .find('[class="mat-radio-label"]')
      .click();
      
      // Click Continue button
      PaymentOptionsPage.continueBtn.click();
      // Create page object - OrderSummaryPage
      // Click on "Place your order and pay"
      OrderSummaryPage.checkoutBtn.click();
      
      // Create page object - OrderCompletionPage
      OrderCompletionPage.orderDetails.contains("Thank you for your purchase!")
      // Validate confirmation - "Thank you for your purchase!"
    });

    // Create scenario - Add address
    // Click on Account
    // Click on Orders & Payment
    // Click on My saved addresses
    // Create page object - SavedAddressesPage
    // Click on Add New Address
    // Create page object - CreateAddressPage
    // Fill in the necessary information
    // Click Submit button
    // Validate that previously added address is visible

    // Create scenario - Add payment option
    // Click on Account
    // Click on Orders & Payment
    // Click on My payment options
    // Create page object - SavedPaymentMethodsPage
    // Click Add new card
    // Fill in Name
    // Fill in Card Number
    // Set expiry month to 7
    // Set expiry year to 2090
    // Click Submit button
    // Validate that the card shows up in the list
  });
});
