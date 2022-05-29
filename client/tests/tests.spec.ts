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
		await expect(page.locator('.city-title')).toHaveText('helsinki');
	});

	test('should open city page on quick link click', async ({ page }) => {
		await page.goto('/');
		const quickLinkNav = page.locator('header nav');
		await quickLinkNav.locator('text=Turku').click();
		await expect(page.locator('.city-title')).toHaveText('turku');
	});
});

test.describe('City page', () => {
	test('should list restaurants', async ({ page }) => {
		await page.goto('/city/helsinki');
		await expect(page.locator('ul:below(h1)').first()).not.toBeEmpty();
	});

	test('should allow adding city to favorites', async ({ page }) => {
		await page.goto('/city/pori');
		await page.locator('text=Add to Favorites').click();
		await expect(page.locator('header nav')).toContainText('pori');
	});

	test('should allow removing city from favorites', async ({ page }) => {
		await page.goto('/city/helsinki');
		await page.locator('text=Remove from Favorites').click();
		await expect(page.locator('header nav')).not.toContainText('helsinki');
	});

	// TODO: mock API response instead of relying on Kaskinen never getting restaurants :)
	test('should show message on city without restaurants', async ({ page }) => {
		await page.goto('/city/kaskinen');
		await expect(page.locator('main h2')).toContainText('Oh no, nothing to eat in kaskinen');
	});

	// FIXME: the cookies from state.json don't seem to get reliably set
	test('should allow voting for a restaurant', async ({ page }) => {
		await page.goto('/city/helsinki');
		const firstRestaurant = page.locator('main > div > ul li').nth(0);
		const voteButton = firstRestaurant.locator('button');
		await voteButton.click();
		await expect(firstRestaurant.locator('button')).toContainText('Remove vote');
	});

	test('should allow removing a vote for a restaurant', async ({ page }) => {
		await page.goto('/city/helsinki');
		const firstRestaurant = page.locator('main > div > ul li').nth(0);
		await firstRestaurant.locator('text=Vote').click();
		await expect(firstRestaurant.locator('button')).toContainText('Remove vote');
		await firstRestaurant.locator('text=Remove vote').click();
		await expect(firstRestaurant.locator('button')).toContainText('Vote');
	});

	test('should show voting notice', async ({ page }) => {
		await page.goto('/city/helsinki');
		const firstRestaurant = page.locator('main > div > ul li').nth(0);
		const voteButton = firstRestaurant.locator('button');
		await voteButton.click();
		await page.goto('/city/turku');
		await expect(page.locator('main')).toContainText('You voted in Helsinki');
	});
});

test.describe('Error pages', () => {
	test('should show error on unknown page', async ({ page }) => {
		await page.goto('/404');
		await expect(page.locator('main h1')).toContainText('Sorry, we seem to have ran into an issue');
	});

	test('should show error on unknown city page', async ({ page }) => {
		await page.goto('/city/mumbai');
		await expect(page.locator('main h1')).toContainText(
			'Mumbai does not seem to be a city in Finland'
		);
	});
});
