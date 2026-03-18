import RegistrationOnePage from "../pageobjects/registration_one.page.js";
import RegistrationOneData from "../registration_one_data.js";
import RegistrationTwoPage from "../pageobjects/registration_two.page.js";
import registration_onePage from "../pageobjects/registration_one.page.js";

//Test Set 12
describe.skip("Password Confirmation", () => { 
    it("TC#51, Password Confirmation 2, Negative, (Password is not the same)", async function () { 
    // Navigate to the registration page
    await RegistrationOnePage.open();
    // Fill the phone number fields with test phone data
    await RegistrationOnePage.fullRegistration(
           RegistrationOneData.firstName.V1, 
           RegistrationOneData.lastName.V5, 
           RegistrationOneData.email.V9, 
           RegistrationOneData.password.V13, 
           RegistrationOneData.confirmPassword.X16, 
           RegistrationOneData.address.V16, 
           RegistrationOneData.apt_ste_unit.V20, 
           RegistrationOneData.country.V23, 
           RegistrationOneData.city.V26, 
           RegistrationOneData.state.V30, 
           RegistrationOneData.zip.V34, 
           RegistrationOneData.phone1.V36, 
           RegistrationOneData.phone2.V36, 
           RegistrationOneData.phone3.V36);
    // Submit the registration form
    // Assert that the phone number is accepted in the correct format or displays validation error for invalid format
        await expect(registration_onePage.confirmPasswordError).toBeDisplayed();
    }); 

    it("TC#52, Password Confirmation 3, Negative, (Blank Space)", async function () {
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
           RegistrationOneData.apt_ste_unit.V20, 
           RegistrationOneData.country.V23, 
           RegistrationOneData.city.V26, 
           RegistrationOneData.state.V30, 
           RegistrationOneData.zip.V34, 
           RegistrationOneData.phone1.V36, 
           RegistrationOneData.phone2.V36, 
           RegistrationOneData.phone3.V36);
    // Submit the registration form
    // Assert that the phone number is accepted in the correct format or displays validation error for invalid format
        await expect(registration_onePage.confirmPasswordError).toBeDisplayed();
    }); 
    //don't touch below this line
});
