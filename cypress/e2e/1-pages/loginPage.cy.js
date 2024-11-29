class LoginPage {
    // Selectors
    elements = {
        usernameInput: () => cy.xpath('//input[@name="username"]'),
        passwordInput: () => cy.xpath('//input[@name="password"]'),
        loginButton: () => cy.xpath('//input[@value="Log In"]'),
      };      
  
    // Methods
    enterUsername(username) {
      this.elements.usernameInput().type(username);
    }
  
    enterPassword(password) {
      this.elements.passwordInput().type(password);
    }
  
    clickLogin() {
      this.elements.loginButton().click();
    }
  
    verifyErrorMessage(expectedMessage) {
      this.elements.errorMessage().should('contain.text', expectedMessage);
    }
  }
  
  export default LoginPage;
  