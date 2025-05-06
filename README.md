# Cypress Automation - SauceDemo Testing

## 📚 Overview

This project is a Cypress-based automated testing.It demonstrates functional testing of the [SauceDemo](https://www.saucedemo.com) web application.

---

## 🛠️ Technologies Used

- [Cypress](https://www.cypress.io/) for end-to-end testing
- JavaScript for scripting
- POM (Page Object Model) design pattern

---

## 📂 Project Structure


| Folder/File           | Purpose                                                                 |
|-----------------------|-------------------------------------------------------------------------|
| `e2e/`                | Stores Cypress test cases.                                               |
| `pages/`              | Contains Page Object Model (POM) classes for each application page.     |
| `support/commands.js` | Defines reusable custom commands (e.g., login).                         |
| `support/e2e.js`      | Automatically loaded before test files; used for global configuration.  |
| `cypress.config.js`   | Cypress project configuration and settings.                             |
| `package.json`        | Lists dependencies, scripts, and project information.                   |



## 🚀 Getting Started

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/saucedemo-cypress.git
   cd saucedemo-cypress

3. **Install Dependencies**
   ```bash
   npm install


3. **Run Cypress**
   ```bash
   npx cypress open
---

## ✅ Test Scenarios
---

### 1. ✔️ Successful Login

**Description:**  
Logs in using valid credentials.

**Expected Outcome:**  
The user should be successfully logged in and redirected to the inventory/home page (`/inventory.html`).

### 2. ❌ Invalid Login Test

**Description:**  
Attempts to log in using incorrect credentials.

**Expected Outcome:**  
An appropriate error message should be displayed, preventing access to the application.

### 3. 🛍️ Product Click Navigation

**Description:**  
After logging in, selects a product from the inventory list.

**Expected Outcome:**  
The application should navigate to the corresponding product details page (`/inventory-item.html?id=...`) showing full product details.

---

## 🧰 Tools Used

- **Cypress** – End-to-End Testing Framework
- **JavaScript** – Scripting Language
- **POM (Page Object Model)** – For structured and reusable code





