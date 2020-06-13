import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I open login page", () => {
  cy.visit("http://qa-h47ppbq-43w4be57n67uu.us.platform.sh/");
});

When("I fill email with {string}", Email => {
  cy.get("#edit-name").type(Email);
});

When("I fill password with {string}", pass => {
  cy.get("#edit-pass").type(pass);
});

When("I press submit button", () => {
  cy.get("#edit-submit").click();
});

Then("I should see Dashboard", () => {
  cy.url().should("include", "dashboard");
});

Then("I should see error message", Error => {
  cy.get("p").contains("Unrecognized e-mail address or password.");
});
