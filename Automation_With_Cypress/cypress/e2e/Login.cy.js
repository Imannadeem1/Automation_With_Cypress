/// <reference types = "Cypress" />

import { LoginClassActions } from "../../PageObject/PageActions/LoginPageActions"


const Login_Element = new LoginClassActions

describe('Test the Login Functionality', () => {
  it('login into the website', () => {
    cy.visit('https://www.saucedemo.com')
    Login_Element.username('standard_user')
    Login_Element.password('secret_sauce')
    Login_Element.LoginButton()

    // Verify landing
    cy.url().should('include', 'https://www.saucedemo.com/inventory.html');
    cy.get('.app_logo').should('contain', 'Swag Labs');
    
  })
})