class RequestLoanPage {
    // Selectors
    elements = {
      loanAmountInput: () => cy.get('#amount'),
      downPaymentInput: () => cy.get('#downPayment'),
      fromAccountDropdown: () => cy.get('#fromAccountId'),
      applyNowButton: () => cy.get('input[value="Apply Now"]'),
      successMessage: () => cy.get('#rightPanel > p'),
    };
  
    // Methods
    enterLoanAmount(amount) {
      this.elements.loanAmountInput().type(amount);
    }
  
    enterDownPayment(downPayment) {
      this.elements.downPaymentInput().type(downPayment);
    }
  
    selectFromAccount(accountId) {
      this.elements.fromAccountDropdown().select(accountId);
    }
  
    clickApplyNow() {
      this.elements.applyNowButton().click();
    }
  
    verifySuccessMessage(expectedMessage) {
      this.elements.successMessage().should('contain.text', expectedMessage);
    }
  }
  
  export default RequestLoanPage;
  