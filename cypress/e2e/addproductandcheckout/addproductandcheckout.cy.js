import login from "../pageobject/login"
import addproductandcheckout from "../pageobject/addproductandcheckout"
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const checkout = new addproductandcheckout


Then("add product to cart and checkout", () => {
    checkout.addproductandcheckouttest();
});

Then("add product to cart and checkout with empty first name", () => {
    checkout.addproductandcheckouttestcase();
});

Then("add product to cart and checkout with empty last name", () => {
    checkout.addproductandcheckouttestcase2();
});