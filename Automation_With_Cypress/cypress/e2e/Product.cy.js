/// <reference types='Cypress'/>

import { LoginClassActions } from "../../PageObject/PageActions/LoginPageActions";

const Login_Element = new LoginClassActions

describe('Product page navigation test on SauceDemo', () => {
    it('should navigate to the product detail page when a product is clicked', () => {
      // Visit the site
      cy.visit('https://www.saucedemo.com/');
      Login_Element.username('standard_user')
      Login_Element.password('secret_sauce')
      Login_Element.LoginButton()

      cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').click()
      cy.url().should('include', 'https://www.saucedemo.com/inventory-item.html?id=4');
      cy.get('[data-test="inventory-item-name"]').should('contain', 'Sauce Labs Backpack');
    });
});