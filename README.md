# SEB Software Tester Assignment

Automated Playwright test created as part of the **Software Tester assignment**.

## Assignment Goal

Create an automated Playwright test for the **SEB website** and **Internet Bank**.

The test automates the required user journey from seb.ee homepage to login validation.

---

## Implemented Test Scenario

The automated test covers all requested steps:

1. Navigate to https://www.seb.ee/
2. Change language to English
3. Open **Pension** tab
4. Click **II pillar**
5. Click **Choose SEB II pillar fund**
6. Open tab **Pension funds for ages 65+**
7. Click **Confirm in the internet bank**
8. Change language in internet bank to English
9. Enter invalid username and ID code
10. Click **Remember me**
11. Click **Log in**
12. Verify error banner is visible

---

## Tech Stack

- Playwright
- TypeScript
- Node.js
- Visual Studio Code
- GitHub

---

## Run Project

### Install dependencies

```bash
npm install

Run tests : npx playwright test
Run headed mode : npx playwright test --headed
Debug mode : npx playwright test --debug

Browser Coverage

Tests run on:

Chromium
Firefox
WebKit

Project Structure
tests/
└── seb-login-page.spec.ts

playwright.config.ts
package.json
README.md

Author : Deniss

Notes

This project demonstrates:

UI automation
End-to-end testing
Cross-browser execution
Locator strategies
Validation handling
Real-world debugging of flaky elements