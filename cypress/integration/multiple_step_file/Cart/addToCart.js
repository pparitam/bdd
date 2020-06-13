import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('I am at "nopCommerce demo store"', function() {
  cy.title().should("eq", "nopCommerce demo store");
});

When('I select the option "Electronics"', function() {
  cy.get("a")
    .contains("Electronics ")
    .click();
});

Then('I should be on "Electronics" page', function() {
  cy.title().should("eq", "nopCommerce demo store. Electronics");
});

And('I select the option "Camera & photo"', function() {
  cy.get("h2")
    .contains(" Camera & photo ")
    .click();
});

Then('I should be on "Camera & photo screen"', function() {
  cy.title().should("eq", "nopCommerce demo store. Camera & photo");
});

And('I select the "Nikon D5500 DSLR"', function() {
  cy.get(":nth-child(1) > .product-item > .picture > a > img").click();
});
