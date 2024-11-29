class TransferFundsPage {
    elements = {
      fromAccountDropdown: () => cy.get('#fromAccountId'),
      toAccountDropdown: () => cy.get('#toAccountId'),
      amountInput: () => cy.get('#amount'),
      transferButton: () => cy.get('input[value="Transfer"]'),
      successMessage: () => cy.get('.title'),
    };
  
    selectFromAccount(accountId) {
      this.elements.fromAccountDropdown().select(accountId);
    }
  
    selectToAccount(accountId) {
      this.elements.toAccountDropdown().select(accountId);
    }
  
    enterAmount(amount) {
      this.elements.amountInput().type(amount);
    }
  
    clickTransfer() {
      this.elements.transferButton().click();
    }
  
    verifySuccessMessage(expectedMessage) {
      this.elements.successMessage().should('contain.text', expectedMessage);
    }
  }
  
  export default TransferFundsPage;
  