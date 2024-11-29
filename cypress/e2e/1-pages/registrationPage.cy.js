class RegistrationPage {
    // Selectors
    elements = {
      firstNameInput: () => cy.get('#customer\\.firstName'),
      lastNameInput: () => cy.get('#customer\\.lastName'),
      addressInput: () => cy.get('#customer\\.address\\.street'),
      cityInput: () => cy.get('#customer\\.address\\.city'),
      stateInput: () => cy.get('#customer\\.address\\.state'),
      zipCodeInput: () => cy.get('#customer\\.address\\.zipCode'),
      phoneNumberInput: () => cy.get('#customer\\.phoneNumber'),
      ssnInput: () => cy.get('#customer\\.ssn'),
      usernameInput: () => cy.get('#customer\\.username'),
      passwordInput: () => cy.get('#customer\\.password'),
      confirmPasswordInput: () => cy.get('#repeatedPassword'),
      registerButton: () => cy.get('input[value="Register"]'),
      successMessage: () => cy.get('#rightPanel > p'),
    };
  
    // Methods
    fillRegistrationForm(userDetails) {
      this.elements.firstNameInput().type(userDetails.firstName);
      this.elements.lastNameInput().type(userDetails.lastName);
      this.elements.addressInput().type(userDetails.address);
      this.elements.cityInput().type(userDetails.city);
      this.elements.stateInput().type(userDetails.state);
      this.elements.zipCodeInput().type(userDetails.zipCode);
      this.elements.phoneNumberInput().type(userDetails.phoneNumber);
      this.elements.ssnInput().type(userDetails.ssn);
      this.elements.usernameInput().type(userDetails.username);
      this.elements.passwordInput().type(userDetails.password);
      this.elements.confirmPasswordInput().type(userDetails.confirmPassword);
    }
  
    clickRegister() {
      this.elements.registerButton().click();
    }
  
    verifySuccessMessage(expectedMessage) {
      this.elements.successMessage().should('contain.text', expectedMessage);
    }
  }
  
  export default RegistrationPage;
  