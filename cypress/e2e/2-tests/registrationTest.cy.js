import RegistrationPage from '../pages/registrationPage';

describe('Parabank Registration Tests - Data Driven', () => {
  const registrationPage = new RegistrationPage();

  beforeEach(() => {
    cy.visit('https://parabank.parasoft.com/parabank/register.htm');
  });

  it('Should register multiple users successfully', () => {
    cy.fixture('registrationData').then((users) => {
      users.forEach((user) => {
        registrationPage.fillRegistrationForm(user);
        registrationPage.clickRegister();
        registrationPage.verifySuccessMessage('Your account was created successfully. You are now logged in.');
        cy.visit('https://parabank.parasoft.com/parabank/register.htm'); // Reset to registration page for the next user
      });
    });
  });
});
