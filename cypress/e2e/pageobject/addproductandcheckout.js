class addproductandcheckout {

addtocarttab = "//button[@id='add-to-cart-sauce-labs-bike-light']"
carttab = ".shopping_cart_link"
checkouttab = "#checkout"
firstname = "#first-name"
lastname = "#last-name"
postalcode = "#postal-code"
continuebtn = "#continue"
finishbtn = "#finish"
emptyfirstname = ""
emptylastname



addproductandcheckouttest(){
    cy.wait(2000)
cy.xpath(this.addtocarttab).click()
cy.get(this.carttab).click()
cy.get(this.checkouttab).click()
cy.get(this.firstname).type("test")
cy.get(this.lastname).type("test")
cy.get(this.postalcode).type("12345")
cy.get(this.continuebtn).click()
cy.get(this.finishbtn).click()
cy.contains("Thank you for your order!").should("be.visible")

}
addproductandcheckouttestcase(){
    cy.wait(2000)
cy.xpath(this.addtocarttab).click()
cy.get(this.carttab).click()
cy.get(this.checkouttab).click()
cy.get(this.lastname).type("test")
cy.get(this.postalcode).type("12345")
cy.get(this.continuebtn).click()
cy.contains("Error: First Name is required").should("be.visible")

}

addproductandcheckouttestcase2(){
    cy.wait(2000)
cy.xpath(this.addtocarttab).click()
cy.get(this.carttab).click()
cy.get(this.checkouttab).click()
cy.get(this.firstname).type("test")
cy.get(this.postalcode).type("12345")
cy.get(this.continuebtn).click()
cy.contains("Error: Last Name is required").should("be.visible")

}}
export default addproductandcheckout