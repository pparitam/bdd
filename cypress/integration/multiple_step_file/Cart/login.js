import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
beforeEach("viewport", function() {
  cy.viewport("macbook-15");
});

Given("I am on the login screen", function() {
  cy.visit("https://demo.nopcommerce.com/login?returnUrl=%2F");
});

When('I enter the "username" and "Password"', function() {
  cy.get("#Email").type("pparitam@gmail.com");
  cy.get("#Password").type("123@123.com");
});

And('I press the button "Login"', function() {
  cy.get(".login-button").click();
});

Then('I should see "nopCommerce demo store"', function() {
  cy.title().should("eq", "nopCommerce demo store");
});

Then(
  'I change the quantity to 3 and press "Add to Cart" button for "Nikon D5500 DSLR - Black"',
  function() {
    cy.get(".variant-name").contains("Nikon D5500 DSLR - Black");
    cy.get("#addtocart_14_EnteredQuantity")
      .clear()
      .type(3);
    cy.get("#add-to-cart-button-14").click();
  }
);
