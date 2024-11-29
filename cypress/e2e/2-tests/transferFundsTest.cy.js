import LoginPage from '../pages/loginPage';
import HomePage from '../pages/homePage';
import TransferFundsPage from '../pages/transferFundsPage';

describe('Parabank Transfer Funds Tests', () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();
  const transferFundsPage = new TransferFundsPage();

  beforeEach(() => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');
    loginPage.enterUsername('validUser');
    loginPage.enterPassword('validPassword');
    loginPage.clickLogin();
    homePage.navigateToTransferFunds();
  });

  it('Should transfer funds between accounts successfully', () => {
    transferFundsPage.selectFromAccount('12345');
    transferFundsPage.selectToAccount('67890');
    transferFundsPage.enterAmount('100');
    transferFundsPage.clickTransfer();
    transferFundsPage.verifySuccessMessage('Transfer Complete!');
  });
});
