class AccountPage {
    // Selectors
    elements = {
      accountDropdown: () => cy.get('#accountId'), // Dropdown to select accounts
      accountBalance: () => cy.get('#accountBalance'), // Element showing account balance
      accountNumber: () => cy.get('#accountId option:selected'), // Selected account number
      transactionsTable: () => cy.get('#transactionTable'), // Table containing transaction history
      transactionRows: () => cy.get('#transactionTable tbody tr'), // Rows in the transaction table
    };
  
    // Methods
    selectAccountByNumber(accountNumber) {
      this.elements.accountDropdown().select(accountNumber);
    }
  
    verifySelectedAccount(accountNumber) {
      this.elements.accountNumber().should('have.text', accountNumber);
    }
  
    verifyAccountBalance(expectedBalance) {
      this.elements.accountBalance().should('contain.text', expectedBalance);
    }
  
    verifyTransactionHistoryHasRows(expectedRows) {
      this.elements.transactionRows().should('have.length', expectedRows);
    }
  
    verifyTransactionDetails(rowIndex, expectedDetails) {
      this.elements.transactionRows().eq(rowIndex).within(() => {
        Object.keys(expectedDetails).forEach((key, index) => {
          cy.get('td').eq(index).should('contain.text', expectedDetails[key]);
        });
      });
    }
  }
  
  export default AccountPage;
  