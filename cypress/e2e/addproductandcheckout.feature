Feature: add product and checkout

Background: 
 Scenario: add product to cart and checkout
       Given that i navigate to the url
         When i enter a valid login credential
        Then  add product to cart and checkout
        
    Scenario: empty first name
        Given that i navigate to the url
         When i enter a valid login credential
        Then  add product to cart and checkout with empty first name

    Scenario: empty last name
        Given that i navigate to the url
         When i enter a valid login credential
        Then  add product to cart and checkout with empty last name