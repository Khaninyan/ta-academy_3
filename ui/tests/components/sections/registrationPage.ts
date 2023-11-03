import { Page , expect } from '@playwright/test';


export default class RegistrationPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  //Expects
  public async is_Access_Your_Vision_Benefits_Visible() {
    return this.page.locator('//div[contains(@class,"ReactModal__Content ReactModal__Content--after-open")]').isVisible();
  }

  //Locators
  firstName = () => this.page.getByPlaceholder('First Name');
  lastName = () => this.page.getByPlaceholder('Last Name');
  email = () => this.page.getByPlaceholder('Email');
  password = () => this.page.getByPlaceholder('Password');
  CreateUHCGlassesAccount = () => this.page.locator('//span[text()="Create UHCGlasses.com Account"]');
  accesBanner = () => this.page.locator('//div[contains(@class, "loginPopup__wrap")]');
  createAccaunt = () => this.page.getByLabel('Create new account');

  //Actions
  public async create_Account(firstName: string, lastName: string, email: string, password: string) {
    //
    await this.CreateUHCGlassesAccount().click();
    await this.accesBanner().waitFor({state: 'visible'});
    await this.firstName().fill(firstName);
    await this.lastName().fill(lastName);
    await this.email().fill(email);
    await this.password().fill(password);
    await this.createAccaunt().click();
  }


  //Expects
  public async registration_Form_Closed() {
    await expect(this.page.locator('//div[contains(@class, "loginPopup__wrap")]')).toBeHidden();
    await expect(this.page.locator('//div[@class="rc-dialog-content"]')).toBeVisible();
    await expect(this.page.locator('//h2[contains(text(),"Welcome,")]')).toHaveText(`Welcome, Ivan `);
    await expect(this.page.locator('//p[@class="welcomePopup__subtitle___21xeJ"]')).toBeVisible();
  }
}