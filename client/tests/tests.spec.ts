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
		await expect(page.locator('main h1')).toHaveText('helsinki');
	});

	test('should open city page on quick link click', async ({ page }) => {
		await page.goto('/');
		const quickLinkNav = page.locator('header nav');
		await quickLinkNav.locator('text=Turku').click();
		await expect(page.locator('main h1')).toHaveText('turku');
	});
});

test.describe('City page', () => {
	test('should list restaurants', async ({ page }) => {
		await page.goto('/city/helsinki');
		await expect(page.locator('ul:below(h1)').first()).not.toBeEmpty();
	});

	test('should show 404 error on unknown city', async ({ page }) => {
		await page.goto('/city/mumbai');
		await expect(page.locator('main h1')).toContainText('404');
	});

	test('should allow voting for a restaurant', async ({ page, context }) => {
		await page.goto('/city/helsinki');
		context.addCookies([voterIdCookie]);
		const firstRestaurant = page.locator('main > div > ul li').nth(0);
		const voteButton = firstRestaurant.locator('button');
		await voteButton.click();
		await expect(firstRestaurant.locator('button')).toContainText('Remove vote');
	});

	test('should allow removing a vote for a restaurant', async ({ page, context }) => {
		await page.goto('/city/helsinki');
		context.addCookies([voterIdCookie]);
		const firstRestaurant = page.locator('main > div > ul li').nth(0);
		await firstRestaurant.locator('text=Vote').click();
		await expect(firstRestaurant.locator('button')).toContainText('Remove vote');
		await firstRestaurant.locator('text=Remove vote').click();
		await expect(firstRestaurant.locator('button')).toContainText('Vote');
	});
});

const voterIdCookie = {
	name: 'VOTERID',
	value: '2a0e3589-68b7-4d37-9bbe-9948d2da9b30',
	path: '/',
	domain: 'lunch-voter-server.herokuapp.com',
	secure: true,
	httpOnly: true
};
