
Feature: login

    Scenario: valid details
        Given login with valid test
        When it should login successfully with valid test
       
     Scenario: invalid details
     Given login with valid test
        When it should not be able to login successfully with invalid test
       