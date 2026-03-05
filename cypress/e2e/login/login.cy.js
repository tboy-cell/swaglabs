import login from "../pageobject/login"
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const loginuser = new login

Given("that i navigate to the url", () => {
    cy.visit('/');
});

When("i enter a valid login credential", () => {
    loginuser.validLogin();

});


 Then("i should be redirected to dashbaord", () => {
    loginuser.productDashboard();
});

When("i enter an invalid credetials, i should not be able to login", () => {
    loginuser.invalidLogin();

    });