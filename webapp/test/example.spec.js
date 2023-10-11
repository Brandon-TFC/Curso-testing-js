const { test, expect } = require('@playwright/test');

test('basic test', async({ page }) => {
  await page.goto('Direccion de url');
  const title = page.locator('.navbar_inner -navbar__title');
  await expect(title).toHaveText('playwright');
});
