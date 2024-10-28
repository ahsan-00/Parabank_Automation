/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
  })
    it('should successfully register a new user', () => {
      // Visit the registration page
      cy.get('#loginPanel > :nth-child(3) > a').click();
  
      // Fill out the registration form
      cy.get('input[name="customer.firstName"]').type('Ahsan')
      cy.get('input[name="customer.lastName"]').type('Habib')
      cy.get('input[name="customer.address.street"]').type('123 Main St')
      cy.get('input[name="customer.address.city"]').type('Dhaka')
      cy.get('input[name="customer.address.state"]').type('R#6, Block-H')
      cy.get('input[name="customer.address.zipCode"]').type('1216')
      cy.get('input[name="customer.phoneNumber"]').type('0151234567')
      cy.get('input[name="customer.ssn"]').type('6789')
      cy.get('input[name="customer.username"]').type('itsmah007')
      cy.get('input[name="customer.password"]').type('password123')
      cy.get('input[name="repeatedPassword"]').type('password123')
  
      // // Submit the registration form
      // cy.get('input[type="submit"]').click()
  
      // Verify successful registration by checking for confirmation message or redirection
      cy.url().should('include', '/parabank/register.htm')
      //cy.contains('Your account was created successfully. You are now logged in.').should('be.visible')
    })
  })
