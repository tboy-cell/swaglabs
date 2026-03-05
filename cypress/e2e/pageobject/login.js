class login {
usernamefield = "#user-name"
passwordfield = "#password"
loginbtn = "#login-button"
username = "standard_user"
password = "secret_sauce"
invalidusername = "standard_user5"
invalidpassword = "secret_sauceh"
product = ".title"


validLogin(){

cy.get(this.usernamefield).type(this.username)
cy.get(this.passwordfield).type(this.password)
cy.get(this.loginbtn).click()

}


productDashboard(){

cy.get(this.product).should("be.visible")

}

invalidLogin(){

cy.get(this.usernamefield).type(this.invalidusername)
cy.get(this.passwordfield).type(this.invalidpassword)
cy.get(this.loginbtn).click()
cy.contains("Epic sadface: Username and password do not match any user in this service").should("be.visible")

}


}
export default login