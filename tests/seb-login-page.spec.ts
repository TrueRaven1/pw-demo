import { test, expect } from '@playwright/test';

test.only('has title', async ({ page }) => {
  await page.goto('https://www.seb.ee/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/SEB/);

  // Click the get English Language.
  await page.getByRole('link', { name: 'English' }).click();

  //Click to accept all cookies
    await page.getByRole('link', { name: 'Accept' }).click();

   // Click on pension tab and click on “II pillar”
   await page.getByRole('button', { name: 'Pension' }).click();

    //Click on “Choose SEB II pillar fund”
    await page.getByRole('banner')
  .getByRole('link', { name: 'II pillar', exact: true })
  .click();

    //Click on tab “Pension funds for ages 65+”
    await page.getByRole('tab', { name: 'Pension funds for ages 65+' }).click();

    // Click on Confirm in the internet bank
    await page.getByRole('link', { name: 'Confirm in the internet bank' }).click();

        // Change language in internet bank to English
    await page.locator('#lang-selection__en').click();

    // Enter a random/invalid user name and ID code
    await page.getByLabel('Username').fill('Invalid User');
    await page.getByLabel('ID code').fill('12345678901');

    // Click Remember me
    await page.locator('.checkbox__indicator').click();

    // Click Log in button
    await page.getByRole('button', { name: 'Log in' }).click();

    // Verify that error banner is visible
    await expect(page.getByText('Username or ID code is incorrect.')).toBeVisible();

});