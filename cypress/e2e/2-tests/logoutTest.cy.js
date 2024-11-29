import LoginPage from '../pages/loginPage';
import HomePage from '../pages/homePage';

describe('Parabank Logout Tests', () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();

  beforeEach(() => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');
    loginPage.enterUsername('validUser');
    loginPage.enterPassword('validPassword');
    loginPage.clickLogin();
  });

  it('Should successfully log out', () => {
    homePage.clickLogout();
    cy.url().should('include', '/index.htm');
  });
});
