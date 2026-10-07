import { test, expect } from '@playwright/test';

test.describe('Tests', () => {
    test.beforeEach(async ({page}) => {
       await page.goto('https://playwright.dev/');
    });

    test('has title', async ({ page }) => {      
        await expect(page).toHaveTitle(/Playwright/);  
        await page.screenshot({ path: 'Page1.png' });
        await page.getByRole('link', { name: 'Docs' }).click();
        await page.screenshot({ path: 'Page2.png' });
        await page.getByRole('link', { name: 'Canary releases' }).click();
        await page.screenshot({ path: 'Page3.png' });
    });

    test('Fill Test', async ({ page }) => {  
            await page.getByRole('button', { name: 'Search (Control+k)' }).click();
            await page.getByPlaceholder('Search').fill('test');
       });  

    test('test', async ({ page }) => {
        await page.getByRole('button', { name: 'Search (Control+k)' }).click();
        await page.getByRole('searchbox', { name: 'Search' }).fill('quack');
        await page.getByRole('link', { name: 'Quick Start', exact: true }).click();
        await page.getByRole('link', { name: 'Getting help', exact: true }).click();
        await page.getByRole('link', { name: 'Sessions', exact: true }).click();
        await page.getByRole('button', { name: 'Node.js' }).click();
        await page.getByRole('link', { name: 'Java' }).click();
        await page.getByRole('link', { name: 'API' }).click();
        await page.getByRole('link', { name: 'errors', exact: true }).click();
        await page.getByRole('link', { name: 'Playwright logo Playwright' }).click();
    });
});