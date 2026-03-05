import login from "../pageobject/login"
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const loginuser = new login

Given("login with valid test", () => {
    cy.visit('/');
});

When("it should login successfully with valid test", () => {
    loginuser.logintest();
});

When("it should not be able to login successfully with invalid test", () => {
    loginuser.logintestcase();
});

 