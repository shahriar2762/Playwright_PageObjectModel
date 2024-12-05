import { test, expect } from '@playwright/test';
import {LoginPage} from '../../pages/login'

test('test', async ({ page }) => {

  const login = new LoginPage(page)

  await login.gotoLoginPage();
  await login.login('tomsmith', 'SuperSecretPassword!')

  
  // await page.getByLabel('Username').fill('tomsmith');
  // await page.getByLabel('Password').fill('SuperSecretPassword!');
  // await page.getByRole('button', { name: ' Login' }).click();
});