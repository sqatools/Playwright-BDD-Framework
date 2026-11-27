import { Before, After } from './fixtures';

Before(async ({ $testInfo }) => {
  console.log(`Starting: ${$testInfo.title}`);
});

After(async ({ page, $testInfo }) => {
  if ($testInfo.status !== $testInfo.expectedStatus) {
    await $testInfo.attach('page-on-failure', {
      body: await page.screenshot({ fullPage: true }),
      contentType: 'image/png',
    });
  }
});