import RegistrationOnePage from "../pageobjects/registration_one.page.js";
import RegistrationOneData from "../registration_one_data.js";
import RegistrationTwoPage from "../pageobjects/registration_two.page.js";
import registration_onePage from "../pageobjects/registration_one.page.js";
import registration_twoPage from "../pageobjects/registration_two.page.js";

//Test Set 12
describe.skip("Apt/Suite/Unit", () => { 
    it("TC#51, Apt/Suite/Unit 2, Positive, (# Symbol Allowed Only)", async function () { 
    // Navigate to the registration page
    await RegistrationOnePage.open();
    // Fill the phone number fields with test phone data
    await RegistrationOnePage.fullRegistration(
           RegistrationOneData.firstName.V1, 
           RegistrationOneData.lastName.V5, 
           RegistrationOneData.email.V9, 
           RegistrationOneData.password.V13, 
           RegistrationOneData.confirmPassword.V15, 
           RegistrationOneData.address.V16, 
           RegistrationOneData.apt_ste_unit.V21, 
           RegistrationOneData.country.V23, 
           RegistrationOneData.city.V26, 
           RegistrationOneData.state.V30, 
           RegistrationOneData.zip.V34, 
           RegistrationOneData.phone1.V36, 
           RegistrationOneData.phone2.V36, 
           RegistrationOneData.phone3.V36);
    // Submit the registration form
    // Assert that the phone number is accepted in the correct format or displays validation error for invalid format
        await expect(registration_twoPage.p2Text).toBeDisplayed();
    }); 

    it("TC#52, Apt/Suite/Unit 3, Positive, (Blank Space)", async function () {
    // Navigate to the registration page
    await RegistrationOnePage.open();
    // Fill the phone number fields with test phone data
    await RegistrationOnePage.fullRegistration(
           RegistrationOneData.firstName.V1, 
           RegistrationOneData.lastName.V5, 
           RegistrationOneData.email.V9, 
           RegistrationOneData.password.X15, 
           RegistrationOneData.confirmPassword.X17, 
           RegistrationOneData.address.V16, 
           RegistrationOneData.apt_ste_unit.V22, 
           RegistrationOneData.country.V23, 
           RegistrationOneData.city.V26, 
           RegistrationOneData.state.V30, 
           RegistrationOneData.zip.V34, 
           RegistrationOneData.phone1.V36, 
           RegistrationOneData.phone2.V36, 
           RegistrationOneData.phone3.V36);
    // Submit the registration form
    // Assert that the phone number is accepted in the correct format or displays validation error for invalid format
        await expect(registration_twoPage.p2Text).toBeDisplayed();
    }); 

    it("TC#53, Apt/Suite/Unit 4, Negative, (Begins with Zero)", async function () {
    // Navigate to the registration page
    await RegistrationOnePage.open();
    // Fill the phone number fields with test phone data
    await RegistrationOnePage.fullRegistration(
           RegistrationOneData.firstName.V1, 
           RegistrationOneData.lastName.V5, 
           RegistrationOneData.email.V9, 
           RegistrationOneData.password.V13, 
           RegistrationOneData.confirmPassword.V15, 
           RegistrationOneData.address.V16, 
           RegistrationOneData.apt_ste_unit.X19, 
           RegistrationOneData.country.V23, 
           RegistrationOneData.city.V26, 
           RegistrationOneData.state.V30, 
           RegistrationOneData.zip.V34, 
           RegistrationOneData.phone1.V36, 
           RegistrationOneData.phone2.V36, 
           RegistrationOneData.phone3.V36);
    // Submit the registration form
    // Assert that the phone number is accepted in the correct format or displays validation error for invalid format
        await expect(registration_onePage.apt_ste_unitError).toBeDisplayed();
    });

    it("TC#54, Apt/Suite/Unit 5, Negative, (Non-# Symbols)", async function () {
    // Navigate to the registration page
    await RegistrationOnePage.open();
    // Fill the phone number fields with test phone data
    await RegistrationOnePage.fullRegistration(
           RegistrationOneData.firstName.V1, 
           RegistrationOneData.lastName.V5, 
           RegistrationOneData.email.V9, 
           RegistrationOneData.password.V13, 
           RegistrationOneData.confirmPassword.V15, 
           RegistrationOneData.address.V16, 
           RegistrationOneData.apt_ste_unit.X20, 
           RegistrationOneData.country.V23, 
           RegistrationOneData.city.V26, 
           RegistrationOneData.state.V30, 
           RegistrationOneData.zip.V34, 
           RegistrationOneData.phone1.V36, 
           RegistrationOneData.phone2.V36, 
           RegistrationOneData.phone3.V36);
    // Submit the registration form
    // Assert that the phone number is accepted in the correct format or displays validation error for invalid format
        await expect(registration_onePage.apt_ste_unitError).toBeDisplayed();
    });

    it("TC#55, Apt/Suite/Unit 6, Positive, (1 Character)", async function () {
        // Navigate to the registration page
        await RegistrationOnePage.open();
        // Fill the phone number fields with test phone data
        await RegistrationOnePage.fullRegistration(
            RegistrationOneData.firstName.V1,
            RegistrationOneData.lastName.V5,
            RegistrationOneData.email.V9,
            RegistrationOneData.password.V13,
            RegistrationOneData.confirmPassword.V15,
            RegistrationOneData.address.V16,
            RegistrationOneData.apt_ste_unit.B21,
            RegistrationOneData.country.V23,
            RegistrationOneData.city.V26,
            RegistrationOneData.state.V30,
            RegistrationOneData.zip.V34,
            RegistrationOneData.phone1.V36,
            RegistrationOneData.phone2.V36,
            RegistrationOneData.phone3.V36);
        // Submit the registration form
        // Assert that the phone number is accepted in the correct format or displays validation error for invalid format
        await expect(registration_twoPage.p2Text).toBeDisplayed();
    });

    //don't touch below this line
});
