import RegistrationOnePage from "../pageobjects/registration_one.page.js";
import RegistrationOneData from "../registration_one_data.js";
import RegistrationTwoPage from "../pageobjects/registration_two.page.js";
import registration_onePage from "../pageobjects/registration_one.page.js";

//Test Set 12
describe("Password Confirmation", () => { 
    it("TC#60, Country, Positive, (Non-Default Response)", async function () { 
    // Navigate to the registration page
    await RegistrationOnePage.open();
    // Fill the phone number fields with test phone data
    await RegistrationOnePage.countryInput.selectByIndex(RegistrationOneData.country.V24);
    await RegistrationOnePage.countrySpecialFill(
           RegistrationOneData.firstName.V1, 
           RegistrationOneData.lastName.V5, 
           RegistrationOneData.email.V9, 
           RegistrationOneData.password.V13, 
           RegistrationOneData.confirmPassword.V15, 
           RegistrationOneData.address.V16, 
           RegistrationOneData.apt_ste_unit.V20, 
           RegistrationOneData.city.V26, 
           RegistrationOneData.zip.V34, 
           RegistrationOneData.phone1.V36, 
           RegistrationOneData.phone2.V36, 
           RegistrationOneData.phone3.V36);
    // Submit the registration form
   await RegistrationOnePage.submitForm();
    // Assert that the phone number is accepted in the correct format or displays validation error for invalid format
        await expect(RegistrationTwoPage.p2Text).toBeDisplayed();
    }); 

    it("TC#61, Country, Positive, (Check Dropdown Menu)", async function () {
    // Navigate to the registration page
    await RegistrationOnePage.open();
    // Fill the phone number fields with test phone data
    await RegistrationOnePage.countrySpecialFill(
        RegistrationOneData.firstName.V1,
        RegistrationOneData.lastName.V5,
        RegistrationOneData.email.V9,
        RegistrationOneData.password.V13,
        RegistrationOneData.confirmPassword.V15,
        RegistrationOneData.address.V16,
        RegistrationOneData.apt_ste_unit.V20,
        RegistrationOneData.city.V26,
        RegistrationOneData.zip.V34,
        RegistrationOneData.phone1.V36,
        RegistrationOneData.phone2.V36,
        RegistrationOneData.phone3.V36
    );
    //check if the country dropdown is displayed
    await expect(RegistrationOnePage.countryInput).toBeDisplayed();
    //select the dropdown menu
    await RegistrationOnePage.countryInput.click();
    //move in the dropdown menu
    await browser.keys("ArrowDown");
    await browser.keys("ArrowDown");
    await browser.keys("ArrowDown");
    await browser.keys("Enter");

    // Submit the registration form
     await browser.keys("Enter");
    // Assert that the phone number is accepted in the correct format or displays validation error for invalid format
    await expect(RegistrationTwoPage.p2Text).toBeDisplayed();
    });

    it("TC#62, Country, Negative, (Select A Country)", async function () {
        // Navigate to the registration page
        await RegistrationOnePage.open();
        // Fill the phone number fields with test phone data
        await RegistrationOnePage.countryInput.selectByIndex(RegistrationOneData.country.X21);
        await RegistrationOnePage.countrySpecialFill(
            RegistrationOneData.firstName.V1,
            RegistrationOneData.lastName.V5,
            RegistrationOneData.email.V9,
            RegistrationOneData.password.V13,
            RegistrationOneData.confirmPassword.V15,
            RegistrationOneData.address.V16,
            RegistrationOneData.apt_ste_unit.V20,
            RegistrationOneData.city.V26,
            RegistrationOneData.zip.V34,
            RegistrationOneData.phone1.V36,
            RegistrationOneData.phone2.V36,
            RegistrationOneData.phone3.V36
        );
        //submit the registration form
        await RegistrationOnePage.submitForm();
        // Assert that the phone number is accepted in the correct format or displays validation error for invalid format
        await expect(RegistrationOnePage.countryError).toBeDisplayed();
    });

    it("TC#63, Country, Positive, (249 Countries)", async function () {
        // Navigate to the registration page
        await RegistrationOnePage.open();

        // Assert that the country dropdown has 249 options
        const dropdownLength = await RegistrationOnePage.dropdownLength();
        await expect(dropdownLength).toBe(250);
    });

    //don't touch below this line
});
