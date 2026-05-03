import { test, expect } from '@playwright/test';

test.describe("check link redirection", () => {
    const links = [
        {name: "API", URLPattern: /.*api/},
       // {name: "Docs", URLPattern: /.*docs/},
        //{name: "API", URLPattern: /.*api/},
    ];

for (const { name, URLPattern } of links) {
    test('should redirect to ${name}', async ({ page }) => {
     await page.goto("https://playwright.dev/");

     await page.getByRole("link", { name }).click();

     await expect(page).toHaveURL(URLPattern);

});

}
});
