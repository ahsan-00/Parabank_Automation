import LoginPage from '../pages/loginPage';
import HomePage from '../pages/homePage';

describe('Parabank Home Page Tests', () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();

  beforeEach(() => {
    // Visit the Parabank login page and log in
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');
    loginPage.enterUsername('validUser');
    loginPage.enterPassword('validPassword');
    loginPage.clickLogin();
  });

  it('Should display the correct welcome message after login', () => {
    homePage.verifyWelcomeMessage('Welcome validUser');
  });

  it('Should navigate to Accounts Overview', () => {
    homePage.navigateToAccountsOverview();
    cy.url().should('include', '/overview.htm');
  });

  it('Should navigate to Open New Account page', () => {
    homePage.navigateToOpenNewAccount();
    cy.url().should('include', '/openaccount.htm');
  });

  it('Should navigate to Transfer Funds page', () => {
    homePage.navigateToTransferFunds();
    cy.url().should('include', '/transfer.htm');
  });

  it('Should log out successfully', () => {
    homePage.clickLogout();
    cy.url().should('include', '/index.htm');
  });
});
