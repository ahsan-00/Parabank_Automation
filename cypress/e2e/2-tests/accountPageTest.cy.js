import LoginPage from '../pages/loginPage';
import HomePage from '../pages/homePage';
import AccountPage from '../pages/accountPage';

describe('Parabank Account Page Tests', () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();
  const accountPage = new AccountPage();

  beforeEach(() => {
    // Login to Parabank
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');
    loginPage.enterUsername('validUser');
    loginPage.enterPassword('validPassword');
    loginPage.clickLogin();

    // Navigate to Accounts Overview
    homePage.navigateToAccountsOverview();
  });

  it('Should display correct account balance for a selected account', () => {
    accountPage.selectAccountByNumber('12345');
    accountPage.verifySelectedAccount('12345');
    accountPage.verifyAccountBalance('$500.00');
  });

  it('Should show transaction history with correct row count', () => {
    accountPage.selectAccountByNumber('12345');
    accountPage.verifyTransactionHistoryHasRows(5); // Assuming 5 transactions exist
  });

  it('Should verify transaction details of a specific row', () => {
    accountPage.selectAccountByNumber('12345');
    const expectedDetails = {
      date: '11/20/2024',
      description: 'Payment to Vendor',
      amount: '-$100.00',
    };
    accountPage.verifyTransactionDetails(0, expectedDetails); // Verify details for the first row
  });
});
