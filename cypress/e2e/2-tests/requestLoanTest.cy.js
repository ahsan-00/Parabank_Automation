import LoginPage from '../pages/loginPage';
import HomePage from '../pages/homePage';
import RequestLoanPage from '../pages/requestLoanPage';

describe('Parabank Loan Request Tests', () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();
  const requestLoanPage = new RequestLoanPage();

  beforeEach(() => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');
    loginPage.enterUsername('validUser');
    loginPage.enterPassword('validPassword');
    loginPage.clickLogin();
    homePage.navigateToRequestLoan();
  });

  it('Should successfully request a loan', () => {
    requestLoanPage.enterLoanAmount('5000');
    requestLoanPage.enterDownPayment('500');
    requestLoanPage.selectFromAccount('12345');
    requestLoanPage.clickApplyNow();
    requestLoanPage.verifySuccessMessage('Congratulations, your loan has been approved.');
  });
});
