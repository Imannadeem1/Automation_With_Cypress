export class LoginClassElement{

    username_text = '[data-test="username"]'
    password_text = '[data-test="password"]'
    Login_Button = '[data-test="login-button"]'

    username(username){
        cy.get(this.username_text).type(username)
    }

    password(password){
        cy.get(this.password_text).type(password)

    }

    LoginButton(){
        cy.get(this.Login_Button).click()
    }
}