import { test , expect } from '@playwright/test'

    //Step 1

        test('Registration and logout test', async ({ page }) => {
            
        await page.goto('https://uvp-0000-uhc-desktop.gusadev.com/');

        await page.locator('//div[text()="My Account"]/../..').hover();

        await page.locator('//button[text()="Log in"]').click();

        await expect(page.locator('//h2[text()="Access your vision benefits"]/../../..')).toBeVisible();

    //Step 2

        await page.locator('//span[text()="Create UHCGlasses.com Account"]').click();

        await expect(page.locator('//h2[text()="No vision insurance? We got you!"]/../../..')).toBeVisible();

    //Step 3

        await page.getByPlaceholder('First Name').click();

        await page.getByPlaceholder('First Name').fill('Ivan');

        await page.getByPlaceholder('First Name').press('Tab');

        await page.getByPlaceholder('Last Name').fill('Ivanov');

        await page.getByPlaceholder('Last Name').press('Tab');
        
        await page.getByPlaceholder('Email').fill(`test@test${Date.now()}.com`);

        await page.getByPlaceholder('Email').press('Tab');

        await page.getByPlaceholder('Password').fill('Test');

        await page.getByPlaceholder('Password').press('Control+1');

        await page.getByPlaceholder('Password').fill('Aa123445');

        await page.getByLabel('Create new account').click();

        await expect(page.locator('//h2[text()="No vision insurance? We got you!"]/../../..')).toBeHidden();

        await expect(page.locator('//div[@class="rc-dialog-content"]')).toBeVisible();

        await expect(page.locator('//h2[contains(text(),"Welcome,")]')).toHaveText(`Welcome, Ivan `);
                                                                          
        await expect(page.locator('//p[@class="welcomePopup__subtitle___21xeJ"]')).toBeVisible();

    //Step 4
            
       await page.locator('//button[@aria-label="Close"]').click();

       await expect(page.locator('//div[@class="rc-dialog-content"]')).toBeHidden();

       await expect(page.locator('//div[@class="myAccount__title___3VN4o"]')).toHaveText(`Hello, Ivan`);  

       await expect(page.locator('//header[@class="eligibilityWidget__header___2B89B"]/p')).toHaveText(`Hi Ivan`);

    //Step 5
       await page.locator('//div[@class="myAccount__myAccountMenu___2mbVE"]').hover();

       await page.locator('//button[text()="Sign out"]').click();

       await expect(page.locator("//div[@class='myAccount__title___3VN4o']")).toHaveText(`My Account`);

       await expect(page.locator('//section[contains(@class, "eligibilityWidget__widget")]')).toBeHidden();
        
    });
