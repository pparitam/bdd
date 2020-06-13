import { defineStep } from "cypress-cucumber-preprocessor/steps";

defineStep("I want to wait for {int} {string}", sec => {
  cy.wait(sec);
});
