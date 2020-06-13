Feature: Login to Application


    As an invalid user
    I cannot login t the system
    As a valid user
    I can login to the System


    Scenario: Invalid Login
        Given I open login page
        And I want to wait for 100 milliseconds
        When I fill email with "kari1@example.com"
        And I fill password with "123456"
        And I press submit button
        Then I should see error message

    Scenario: Valid Login
        Given I open login page
        When I fill email with "subv@example.com"
        And I fill password with "admin"
        And I press submit button
        Then I should see Dashboard

