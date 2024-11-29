class ForgotPasswordPage {
    // Selectors
    elements = {
      usernameInput: () => cy.get('#username'), // Selector for the username input field
      submitButton: () => cy.get('input[value="Submit"]'), // Selector for the submit button
      successMessage: () => cy.get('#rightPanel > p'), // Selector for success message
      errorMessage: () => cy.get('#rightPanel > .error'), // Selector for error messages
    };
  
    // Methods
    enterUsername(username) {
      this.elements.usernameInput().type(username);
    }
  
    clickSubmit() {
      this.elements.submitButton().click();
    }
  
    verifySuccessMessage(expectedMessage) {
      this.elements.successMessage().should('contain.text', expectedMessage);
    }
  
    verifyErrorMessage(expectedMessage) {
      this.elements.errorMessage().should('contain.text', expectedMessage);
    }
  }
  
  export default ForgotPasswordPage;
  