
Feature: login

    Scenario: valid login
        Given that i navigate to the url
        When i enter a valid login credential
        Then i should be redirected to dashbaord
       
     Scenario: invalid login
     Given that i navigate to the url
     
        When i enter an invalid credetials, i should not be able to login
       