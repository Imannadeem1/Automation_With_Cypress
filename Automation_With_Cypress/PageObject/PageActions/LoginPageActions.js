const LoginElementLocators = require('../PageElements/LoginPageElements.json')

export class LoginClassActions{


    username(username){
        cy.get(LoginElementLocators.LoginPageLocators.username_text).type(username)
        return
    }

    password(password){
        cy.get(LoginElementLocators.LoginPageLocators.password_text).type(password)
        return

    }

    LoginButton(){
        cy.get(LoginElementLocators.LoginPageLocators.Login_Button).click()
        return
    }
}