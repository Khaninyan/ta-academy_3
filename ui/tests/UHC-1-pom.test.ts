import { test, expect } from "@playwright/test"
import MainPage from "./components/pages/mainPage";
import RegistrationPage from "./components/sections/registrationPage";
import RegistrationClose from "./components/sections/registrationClose";
import SingOut from "./components/sections/singOut";

test('Registration and logout test POM', async ({page}) => {

    const mainPage = new MainPage(page);
    const registrationPage = new RegistrationPage(page);
    const registrationClose = new RegistrationClose(page);
    const singOut = new SingOut(page);

    await mainPage.navigate_To_Login_Page();
    await expect(await registrationPage.is_Access_Your_Vision_Benefits_Visible()).toBeTruthy();
    await registrationPage.create_Account('Ivan', 'Ivanov', `test@test${Date.now()}.com`, 'Aa123445');
    await registrationPage.registration_Form_Closed();
    await registrationClose.registration_Close_And_Check();
    await singOut.logOut();
    await singOut.logOutCheck();
});