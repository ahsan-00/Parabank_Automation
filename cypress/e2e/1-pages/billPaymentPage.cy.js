class BillPaymentPage {
    // Selectors
    elements = {
      payeeNameInput: () => cy.get('input[name="payee.name"]'),
      addressInput: () => cy.get('input[name="payee.address.street"]'),
      cityInput: () => cy.get('input[name="payee.address.city"]'),
      stateInput: () => cy.get('input[name="payee.address.state"]'),
      zipCodeInput: () => cy.get('input[name="payee.address.zipCode"]'),
      phoneNumberInput: () => cy.get('input[name="payee.phoneNumber"]'),
      accountDropdown: () => cy.get('select[name="fromAccountId"]'),
      amountInput: () => cy.get('input[name="amount"]'),
      sendPaymentButton: () => cy.get('input[value="Send Payment"]'),
      successMessage: () => cy.get('#rightPanel > p'),
    };
  
    // Methods
    fillPayeeDetails({ name, address, city, state, zip, phone }) {
      this.elements.payeeNameInput().type(name);
      this.elements.addressInput().type(address);
      this.elements.cityInput().type(city);
      this.elements.stateInput().type(state);
      this.elements.zipCodeInput().type(zip);
      this.elements.phoneNumberInput().type(phone);
    }
  
    selectAccount(accountId) {
      this.elements.accountDropdown().select(accountId);
    }
  
    enterAmount(amount) {
      this.elements.amountInput().type(amount);
    }
  
    clickSendPayment() {
      this.elements.sendPaymentButton().click();
    }
  
    verifySuccessMessage(expectedMessage) {
      this.elements.successMessage().should('contain.text', expectedMessage);
    }
  }
  
  export default BillPaymentPage;
  