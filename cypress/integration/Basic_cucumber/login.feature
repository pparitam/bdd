Feature: Login to Application

   As a valid user
   I want to login to the System

   Scenario: Valid Login
      Given I open login page
      And I want to wait for 100 milliseconds
      When I submit login
      Then I should see Dashboard

