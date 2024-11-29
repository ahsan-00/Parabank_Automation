class HomePage {
    // Selectors
    elements = {
      welcomeMessage: () => cy.get('.smallText'), // Welcome message
      accountsOverviewLink: () => cy.get('a[href*="overview.htm"]'),
      openNewAccountLink: () => cy.get('a[href*="openaccount.htm"]'),
      transferFundsLink: () => cy.get('a[href*="transfer.htm"]'),
      logoutButton: () => cy.get('a[href*="logout.htm"]'),
    };
  
    // Methods
    verifyWelcomeMessage(expectedMessage) {
      this.elements.welcomeMessage().should('contain.text', expectedMessage);
    }
  
    navigateToAccountsOverview() {
      this.elements.accountsOverviewLink().click();
    }
  
    navigateToOpenNewAccount() {
      this.elements.openNewAccountLink().click();
    }
  
    navigateToTransferFunds() {
      this.elements.transferFundsLink().click();
    }
  
    clickLogout() {
      this.elements.logoutButton().click();
    }
  }
  
  export default HomePage;
  