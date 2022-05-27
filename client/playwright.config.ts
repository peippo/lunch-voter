import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
	testDir: './tests',
	timeout: 30 * 1000,
	expect: {
		timeout: 5000
	},
	fullyParallel: true,
	reporter: 'list',
	// globalSetup: './playwright.global-setup',
	use: {
		actionTimeout: 0,
		baseURL: 'http://localhost:3000',
		storageState: 'state.json',
		trace: 'on-first-retry'
	},
	projects: [
		{
			name: 'firefox',
			use: {
				...devices['Desktop Firefox']
			}
		},
		{
			name: 'chromium',
			use: {
				...devices['Desktop Chrome']
			}
		}
		// {
		// 	name: 'webkit',
		// 	use: {
		// 		...devices['Desktop Safari']
		// 	}
		// }
	],

	/* Folder for test artifacts such as screenshots, videos, traces, etc. */
	outputDir: 'test-results/',

	/* Run your local dev server before starting the tests */
	webServer: {
		command: 'npm run build && npm run preview',
		port: 3000
	}
};

export default config;
