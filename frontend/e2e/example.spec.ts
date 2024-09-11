import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  const title = await page.locator('h1#title').textContent();
  expect(title).toContain("FRONTENDLAND");
});
