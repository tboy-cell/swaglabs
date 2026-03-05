import login from "../pageobject/login"
import addproductandcheckout from "../pageobject/addproductandcheckout"
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const checkout = new addproductandcheckout


When("add product to cart and checkout", () => {
    checkout.addproductandcheckouttest();
});

When("add product to cart and checkout with empty first name", () => {
    checkout.addproductandcheckouttestcase();
});

When("add product to cart and checkout with empty last name", () => {
    checkout.addproductandcheckouttestcase2();
});