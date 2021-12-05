
import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  // Go to https://www.demoblaze.com/
  await page.goto('https://www.demoblaze.com/');
  // Click text=Home (current)
  await page.click('text=Home (current)');
  await expect(page).toHaveURL('https://www.demoblaze.com/index.html');
  // Click a:has-text("Contact")
  await page.click('a:has-text("Contact")');
  // Click input[type="text"]
  await page.click('input[type="text"]');
  // Fill input[type="text"]
  await page.fill('input[type="text"]', 'qw');
  // Click #recipient-name
  await page.click('#recipient-name');
  // Fill #recipient-name
  await page.fill('#recipient-name', 'qw');
  // Click textarea
  await page.click('textarea');
  // Fill textarea
  await page.fill('textarea', 'qw');
  // Click text=Send message
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.click('text=Send message');
  await expect(page).toHaveURL('https://www.demoblaze.com/index.html');
  // Click text=Phones
  await page.click('text=Phones');
  await expect(page).toHaveURL('https://www.demoblaze.com/index.html#');
  // Click text=Laptops
  await page.click('text=Laptops');
  await expect(page).toHaveURL('https://www.demoblaze.com/index.html#');
  // Click text=Monitors
  await page.click('text=Monitors');
  await expect(page).toHaveURL('https://www.demoblaze.com/index.html#');
});