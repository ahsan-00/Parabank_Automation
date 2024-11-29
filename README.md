# Parabank_Automation
# **Parabank Automation Project**

## **Overview**
This project automates the functional testing of the [Parabank application](https://parabank.parasoft.com/parabank/index.htm) using **Cypress** with the **Page Object Model (POM)** design pattern. The automation covers essential user workflows, including registration, login, account activities, funds transfer, bill payment, request loans, forgot password, and more.

---

## **Project Structure**

```
ParabankAutomation/
│
├── cypress/
│   ├── fixtures/
│   │   ├── registrationData.json     # Test data for registration
│   │   ├── forgotPasswordData.json   # Test data for forgot password
│   ├── integration/
│   │   ├── tests/
│   │   │   ├── registrationTest.cy.js      # Registration tests
│   │   │   ├── loginTest.cy.js             # Login tests
│   │   │   ├── forgotPasswordTest.cy.js    # Forgot Password tests
│   │   │   ├── accountActivityTest.cy.js   # Account Activity tests
│   │   ├── pages/
│   │   │   ├── registrationPage.js         # POM for Registration
│   │   │   ├── loginPage.js                # POM for Login
│   │   │   ├── forgotPasswordPage.js       # POM for Forgot Password
│   │   │   ├── accountActivityPage.js      # POM for Account Activity
│   ├── plugins/
│   ├── support/
│       ├── commands.js                     # Custom Cypress commands
│       ├── index.js                        # Global configurations
├── package.json                            # Project dependencies
├── cypress.config.js                       # Cypress configuration file
├── README.md                               # Project documentation
```

---

## **Setup Instructions**

### **Prerequisites**
1. **Node.js** (version 16 or above)
2. **Cypress** (installed via npm)

### **Installation Steps**
1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```
2. Navigate to the project directory:
   ```bash
   cd ParabankAutomation
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

---

## **How to Run Tests**

### **Run All Tests**
```bash
npx cypress open
```
1. Select a browser (e.g., Chrome, Edge).
2. Click on a test file to execute.

### **Run a Specific Test in Headless Mode**
```bash
npx cypress run --spec cypress/integration/tests/<testName>.cy.js
```

### **Run All Tests in Headless Mode**
```bash
npx cypress run
```

---

## **Implemented Features**

### **1. Registration**
- Positive and negative tests for user registration.
- Validates:
  - Field validations (required fields, invalid data).
  - Successful account creation.

### **2. Login**
- Validates:
  - Successful login with valid credentials.
  - Error messages for invalid credentials.
  - Locked-out scenarios.

### **3. Forgot Password**
- Tests include:
  - Valid username/email for reset instructions.
  - Error handling for invalid or blank inputs.

### **4. Account Activities**
- Validates:
  - Viewing transaction history.
  - Filtering transactions by date and type.

### **5. Transfer Funds**
- Covers:
  - Valid fund transfers between accounts.
  - Negative tests (e.g., insufficient funds).

### **6. Bill Payment**
- Validates:
  - Adding payees and making payments.
  - Field validation (e.g., invalid amount).

### **7. Request Loan**
- Includes:
  - Positive test: Loan approval for valid applications.
  - Negative test: Denial for insufficient funds.

### **8. Logout**
- Ensures the user is redirected to the login page on logout.

---

## **Testing Approach**

### **Page Object Model (POM)**
The project uses POM to maintain separate files for each page, ensuring reusability and maintainability of the code.

### **Data-Driven Testing**
Test cases leverage fixtures for reusable test data, enabling efficient execution of multiple scenarios.

### **Assertions**
Cypress's built-in assertions validate:
- Success and error messages.
- Data accuracy in tables and forms.
- Redirects and page navigations.

---

## **Future Enhancements**
1. Implement performance and load testing.
2. Automate additional admin workflows if applicable.
3. Integrate with CI/CD pipelines using tools like Jenkins or GitHub Actions.
4. Include cross-browser testing for compatibility.

---

## **Dependencies**
- [Cypress](https://www.cypress.io/)
- [Mocha](https://mochajs.org/) (bundled with Cypress for testing)

---

## **Contributing**
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b <branch_name>
   ```
3. Commit changes:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push the branch:
   ```bash
   git push origin <branch_name>
   ```
5. Create a pull request.

---

## **License**
This project is licensed under the [MIT License](LICENSE).
=======
# Parabank_Automation, I'm working on this project, Stay connected to me!!!
