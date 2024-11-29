import ForgotPasswordPage from '../pages/forgotPasswordPage';

describe('Parabank Forgot Password Tests', () => {
  const forgotPasswordPage = new ForgotPasswordPage();

  beforeEach(() => {
    // Navigate to the Forgot Password page
    cy.visit('https://parabank.parasoft.com/parabank/lookup.htm');
  });

  it('Should successfully send reset instructions for a valid username', () => {
    const validUsername = 'johndoe123'; // Replace with a valid username in the system

    forgotPasswordPage.enterUsername(validUsername);
    forgotPasswordPage.clickSubmit();
    forgotPasswordPage.verifySuccessMessage('Your password will be sent to the following email address.');
  });

  it('Should show an error message for an invalid username', () => {
    const invalidUsername = 'invaliduser';

    forgotPasswordPage.enterUsername(invalidUsername);
    forgotPasswordPage.clickSubmit();
    forgotPasswordPage.verifyErrorMessage('We could not find your username in our system.');
  });

  it('Should show an error when the username field is left blank', () => {
    forgotPasswordPage.enterUsername(''); // Leave the field blank
    forgotPasswordPage.clickSubmit();
    forgotPasswordPage.verifyErrorMessage('Please enter your username.');
  });
});
