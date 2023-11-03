import { Page , expect } from '@playwright/test';

export default class RegistrationClose {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    //Locators
    buttonClose = () => this.page.locator('//button[@aria-label="Close"]');
    welcomeBanner = () => this.page.locator('//div[@class="rc-dialog-content"]');
    accaunttitle = () => this.page.locator('//div[contains(@class, "myAccount__title")]');
    eligibilityWidget = () => this.page.locator('//header[@class="eligibilityWidget__header___2B89B"]/p');
    //Actions

    public async registration_Close_And_Check() {
        await this.buttonClose().click();
        await expect(this.welcomeBanner()).toBeHidden();
        await expect(this.accaunttitle()).toHaveText(`Hello, Ivan`);
        await expect(this.eligibilityWidget()).toHaveText(`Hi Ivan`);
    }
}