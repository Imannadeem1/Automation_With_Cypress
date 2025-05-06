/// <reference types = "Cypress" />

import { LoginClassActions } from "../../PageObject/PageActions/LoginPageActions"


const Login_Element = new LoginClassActions

describe('Test the Invalid Login Functionality', () => {
  it('Not login into the website', () => {
    cy.visit('https://www.saucedemo.com')
    Login_Element.username('standard_user12')
    Login_Element.password('secret_sauce')
    Login_Element.LoginButton()

    //Assert to verify that error message
    cy.get('.error-message-container').should('be.visible').and('contain' , 'Epic sadface: Username and password do not match any user in this service')

    
  })
})