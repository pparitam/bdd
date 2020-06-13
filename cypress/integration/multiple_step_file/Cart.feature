Feature: ECommerce Scenario

    As a Authenticated user
    I should login to the website
    Add items to the cart successfully
    Scenario: User Login
        Given I am on the login screen
        When I enter the "username" and "Password"
        And I press the button "Login"
        Then I should see "nopCommerce demo store"

    Scenario: Add Product to the Cart
        Given I am at "nopCommerce demo store"
        And I want to wait for 50 milliseconds
        When I select the option "Electronics"
        Then I should be on "Electronics" page
        And I select the option "Camera & photo"
        Then I should be on "Camera & photo screen"
        And I select the "Nikon D5500 DSLR"
        Then I change the quantity to 3 and press "Add to Cart" button for "Nikon D5500 DSLR - Black"
