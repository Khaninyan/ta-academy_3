import { Page , expect } from '@playwright/test';


export default class SingOut {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

//Locators
myAccauntMenu =()=> this.page.locator('//div[contains(@class,"myAccount__myAccountMenu")]');
singOutButton=()=> this.page.locator('//button[text()="Sign out"]');
myAccauntTitle=()=>this.page.locator('//div[contains(@class,"myAccount__title")]');
eligibilityWidget=()=>this.page.locator('//section[contains(@class, "eligibilityWidget__widget")]');
//Actions

public async logOut(){
    await this.myAccauntMenu().hover();
    await this.singOutButton().click();
}

public async logOutCheck(){
    await expect(this.myAccauntTitle()).toHaveText(`My Account`);
    await expect(this.eligibilityWidget()).toBeHidden();
}
}

