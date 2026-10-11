# Playwright QA Automation Framework

A professional UI and API test automation framework built with **Playwright and TypeScript**, featuring the Page Object Model (POM), reusable fixtures, centralized test data, cross-browser testing, and CI/CD integration with GitHub Actions.

## Project Overview

This project demonstrates practical QA automation skills through automated tests for a web application and a REST API.

The framework is designed to promote maintainability, reusability, and reliable test execution across different browsers and continuous integration environments.

## Tech Stack

- **Language:** TypeScript
- **Automation:** Playwright Test
- **Architecture:** Page Object Model (POM)
- **Test Management:** Playwright fixtures and centralized test data
- **UI Testing:** Chromium, Firefox, and WebKit
- **API Testing:** REST API validation
- **CI/CD:** GitHub Actions
- **Version Control:** Git and GitHub

## Test Coverage

### UI Automation

- Successful user login
- Login validation with invalid credentials
- User logout
- Adding a product to the shopping cart
- Removing a product from the shopping cart
- Shopping cart badge and product visibility validation

### API Automation

- HTTP status code validation
- Response body validation
- JSON structure and required property validation
- Response data availability checks

The API test uses JSONPlaceholder, a public REST API for testing and prototyping.

## Framework Design

- **Page Object Model:** Encapsulates page locators and user interactions.
- **Reusable fixtures:** Provides shared page objects to test cases.
- **Centralized test data:** Separates valid and invalid credentials from test logic.
- **Cross-browser execution:** Runs UI tests in Chromium, Firefox, and WebKit.
- **CI/CD integration:** Automatically executes tests through GitHub Actions.

## Project Structure

```text
playwright-qa-automation/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── fixtures/
│   └── test.fixture.ts
├── pages/
│   ├── api/
│   │   └── users.api.ts
│   └── ui/
│       ├── login.page.ts
│       ├── inventory.page.ts
│       └── cart.page.ts
├── test-data/
│   └── users.ts
├── tests/
│   ├── api/
│   │   └── users.spec.ts
│   └── ui/
│       ├── login.spec.ts
│       └── cart.spec.ts
├── playwright.config.ts
├── package.json
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/mauricio-rama/playwright-qa-automation.git
cd playwright-qa-automation
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install Playwright browsers

```bash
npx playwright install
```

### 4. Run all tests

```bash
npm test
```

### Run specific test suites

Run UI tests:

```bash
npx playwright test --project=chromium
```

Run API tests:

```bash
npx playwright test --project=api
```

Run tests with a visible browser:

```bash
npm run test:headed
```

Launch Playwright UI mode:

```bash
npm run test:ui
```

View the HTML report:

```bash
npm run report
```

## Continuous Integration

The project includes a GitHub Actions workflow that installs dependencies, installs Playwright browsers, executes the automated test suite, and uploads the test artifacts.

**Latest verified CI result:** 19 tests passed.

[View GitHub Actions runs](https://github.com/mauricio-rama/playwright-qa-automation/actions)

## Application Under Test

- **Web application:** [SauceDemo](https://www.saucedemo.com)
- **API:** [JSONPlaceholder](https://jsonplaceholder.typicode.com)

The project uses publicly available demo applications for learning and portfolio demonstration.

## Skills Demonstrated

- UI test automation
- REST API testing
- TypeScript
- Playwright Test
- Page Object Model
- Test fixtures and reusable components
- Test data management
- Cross-browser testing
- Assertions and response validation
- Git version control
- CI/CD with GitHub Actions

## Author

**Mauricio Ramirez**

[GitHub Profile](https://github.com/mauricio-rama)

[Project Repository](https://github.com/mauricio-rama/playwright-qa-automation)