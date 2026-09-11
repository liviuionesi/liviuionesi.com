import { test, expect } from '@playwright/test';

/**
 * The browser-rendered CV pages were removed. The site must not serve a CV that
 * can differ from the PDF sent with an application, so these paths have to be
 * gone, not merely hidden behind an access gate.
 */
const REMOVED_CV_ROUTES = ['/cv', '/cv-ats', '/cv-markdown'];

test.describe('Removed CV routes', () => {
  for (const route of REMOVED_CV_ROUTES) {
    test(`${route} is gone, not gated`, async ({ page }) => {
      const response = await page.goto(route);

      // A gate that renders an access notice answers 200, so the status alone
      // already separates "deleted" from "protected".
      expect(response?.status()).toBe(404);

      // And the body must be the framework not-found page. If the route came
      // back but refused the visitor, the status could be made to look right
      // while a real page still answered here.
      await expect(page.getByText('This page could not be found.')).toBeVisible();

      // The old pages wrapped the CV in these containers.
      await expect(page.locator('.cv-page-container')).toHaveCount(0);
      await expect(page.locator('.ats-page-container')).toHaveCount(0);
    });
  }
});
