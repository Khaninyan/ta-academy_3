import { Page } from '@playwright/test';

export default class MainPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  //Locators
  myAccauntMenu = () => this.page.locator('//div[contains(@class, "myAccount__myAccountMenu")]');
  logInButton = () => this.page.locator('//button[text()="Log in"]')
  //Actions

  public async navigate_To_Login_Page() {
    await this.page.goto('https://uvp-0000-uhc-desktop.gusadev.com/');
    await this.myAccauntMenu().hover();
    await this.logInButton().click();
  }
}