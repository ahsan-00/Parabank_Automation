import LoginPage from '../pages/loginPage';

describe('Parabank Login Tests', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    // Visit the Parabank login page
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');
  });

  it('Should log in successfully with valid credentials', () => {
    loginPage.enterUsername('validUser');
    loginPage.enterPassword('validPassword');
    loginPage.clickLogin();

    // Verify redirection to dashboard
    cy.url().should('include', '/overview.htm');
  });

  it('Should display error for invalid credentials', () => {
    loginPage.enterUsername('invalidUser');
    loginPage.enterPassword('invalidPassword');
    loginPage.clickLogin();

    // Verify error message
    loginPage.verifyErrorMessage('The username and password could not be verified.');
  });
});
