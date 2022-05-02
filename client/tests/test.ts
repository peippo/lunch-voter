import { expect, test } from '@playwright/test';

test.describe('Home', () => {
	test('should display city search input', async ({ page }) => {
		await page.goto('/');
		await expect(page.locator('#city-search')).toBeVisible();
	});
});

test.describe('Search', () => {
	test('should open city page on valid city name submit', async ({ page }) => {
		await page.goto('/');
		await page.fill('#city-search', 'helsinki');
		await page.locator('form button').click();
		await expect(page.locator('h1')).toHaveText('helsinki');
	});

	test('should open city page on quick link click', async ({ page }) => {
		await page.goto('/');
		const quickLinkNav = page.locator('header nav');
		await quickLinkNav.locator('text=Turku').click();
		await expect(page.locator('h1')).toHaveText('turku');
	});
});

test.describe('City page', () => {
	test('should list restaurants', async ({ page }) => {
		await page.goto('/city/helsinki');
		await expect(page.locator('ul:below(h1)')).not.toBeEmpty();
	});
});
