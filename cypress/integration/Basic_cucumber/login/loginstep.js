import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I open login page", () => {
  cy.visit("http://qa-h47ppbq-43w4be57n67uu.us.platform.sh/");
});

When("I submit login", () => {
  cy.get("#edit-name").type("subv@example.com");
  cy.get("#edit-pass").type("admin");
  cy.get("#edit-submit").click();
});

Then("I should see Dashboard", () => {
  cy.get("a").contains("Dashboard");
});
