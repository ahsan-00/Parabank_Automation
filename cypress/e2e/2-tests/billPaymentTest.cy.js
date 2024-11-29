import LoginPage from '../pages/loginPage';
import HomePage from '../pages/homePage';
import BillPaymentPage from '../pages/billPaymentPage';

describe('Parabank Bill Payment Tests', () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();
  const billPaymentPage = new BillPaymentPage();

  beforeEach(() => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');
    loginPage.enterUsername('validUser');
    loginPage.enterPassword('validPassword');
    loginPage.clickLogin();
    homePage.navigateToBillPayment();
  });

  it('Should successfully make a bill payment', () => {
    billPaymentPage.fillPayeeDetails({
      name: 'John Doe',
      address: '123 Elm Street',
      city: 'Springfield',
      state: 'IL',
      zip: '62704',
      phone: '555-1234',
    });
    billPaymentPage.selectAccount('12345');
    billPaymentPage.enterAmount('150');
    billPaymentPage.clickSendPayment();
    billPaymentPage.verifySuccessMessage('Bill Payment Complete');
  });
});
