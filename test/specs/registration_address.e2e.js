import RegistrationOnePage from "../pageobjects/registration_one.page.js";
import RegistrationOneData from "../registration_one_data.js";
import RegistrationTwoPage from "../pageobjects/registration_two.page.js";
import registration_onePage from "../pageobjects/registration_one.page.js";
import registration_twoPage from "../pageobjects/registration_two.page.js";

//Test Set 12
describe.skip("Address", () => { 
    it("TC#53, Address 2, Positive, (Accents Allowed)", async function () { 
    // Navigate to the registration page
    await RegistrationOnePage.open();
    // Fill the phone number fields with test phone data
    await RegistrationOnePage.fullRegistration(
           RegistrationOneData.firstName.V1, 
           RegistrationOneData.lastName.V5, 
           RegistrationOneData.email.V9, 
           RegistrationOneData.password.V13, 
           RegistrationOneData.confirmPassword.V15, 
           RegistrationOneData.address.V17, 
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
        await expect(registration_twoPage.p2Text).toBeDisplayed();
    }); 

    it("TC#54, Address 3, Positive, (Hyphens Included)", async function () {
    // Navigate to the registration page
    await RegistrationOnePage.open();
    // Fill the phone number fields with test phone data
    await RegistrationOnePage.fullRegistration(
           RegistrationOneData.firstName.V1, 
           RegistrationOneData.lastName.V5, 
           RegistrationOneData.email.V9, 
           RegistrationOneData.password.V13, 
           RegistrationOneData.confirmPassword.V15, 
           RegistrationOneData.address.V18, 
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
        await expect(registration_twoPage.p2Text).toBeDisplayed();
    }); 

    it("TC#55, Address 4, Positive, (Blank Space)", async function () {
    // Navigate to the registration page
    await RegistrationOnePage.open();
    // Fill the phone number fields with test phone data
    await RegistrationOnePage.fullRegistration(
           RegistrationOneData.firstName.V1, 
           RegistrationOneData.lastName.V5, 
           RegistrationOneData.email.V9, 
           RegistrationOneData.password.V13, 
           RegistrationOneData.confirmPassword.V15, 
           RegistrationOneData.address.V19, 
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
        await expect(registration_twoPage.p2Text).toBeDisplayed();
    });

    it("TC#56, Address 5, Negative, (Symbols Not Allowed)", async function () {
    // Navigate to the registration page
    await RegistrationOnePage.open();
    // Fill the phone number fields with test phone data
    await RegistrationOnePage.fullRegistration(
           RegistrationOneData.firstName.V1, 
           RegistrationOneData.lastName.V5, 
           RegistrationOneData.email.V9, 
           RegistrationOneData.password.V13, 
           RegistrationOneData.confirmPassword.V15, 
           RegistrationOneData.address.X18, 
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
        await expect(registration_onePage.addressError).toBeDisplayed();
    });
    it("TC#57, Address 6, Positive, (4 Letters)", async function () {
    // Navigate to the registration page
    await RegistrationOnePage.open();
    // Fill the phone number fields with test phone data
    await RegistrationOnePage.fullRegistration(
           RegistrationOneData.firstName.V1, 
           RegistrationOneData.lastName.V5, 
           RegistrationOneData.email.V9, 
           RegistrationOneData.password.V13, 
           RegistrationOneData.confirmPassword.V15, 
           RegistrationOneData.address.B17, 
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
        await expect(registration_twoPage.p2Text).toBeDisplayed();
    });

    it("TC#58, Address 7, Positive, (64 Letters)", async function () {
    // Navigate to the registration page
    await RegistrationOnePage.open();
    // Fill the phone number fields with test phone data
    await RegistrationOnePage.fullRegistration(
           RegistrationOneData.firstName.V1, 
           RegistrationOneData.lastName.V5, 
           RegistrationOneData.email.V9, 
           RegistrationOneData.password.V13, 
           RegistrationOneData.confirmPassword.V15, 
           RegistrationOneData.address.B18, 
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
        await expect(registration_twoPage.p2Text).toBeDisplayed();
    });

    it("TC#59, Address 8, Positive, (5 Characters)", async function () {
    // Navigate to the registration page
    await RegistrationOnePage.open();
    // Fill the phone number fields with test phone data
    await RegistrationOnePage.fullRegistration(
           RegistrationOneData.firstName.V1, 
           RegistrationOneData.lastName.V5, 
           RegistrationOneData.email.V9, 
           RegistrationOneData.password.V13, 
           RegistrationOneData.confirmPassword.V15, 
           RegistrationOneData.address.B19, 
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
        await expect(registration_twoPage.p2Text).toBeDisplayed();
    });

    it("TC#60, Address 9, Positive, (63 Characters)", async function () {
    // Navigate to the registration page
    await RegistrationOnePage.open();
    // Fill the phone number fields with test phone data
    await RegistrationOnePage.fullRegistration(
           RegistrationOneData.firstName.V1, 
           RegistrationOneData.lastName.V5, 
           RegistrationOneData.email.V9, 
           RegistrationOneData.password.V13, 
           RegistrationOneData.confirmPassword.V15, 
           RegistrationOneData.address.B20, 
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
        await expect(registration_twoPage.p2Text).toBeDisplayed();
    });

    it("TC#61, Address 10, Negative, (3 Letters)", async function () {
    // Navigate to the registration page
    await RegistrationOnePage.open();
    // Fill the phone number fields with test phone data
    await RegistrationOnePage.fullRegistration(
           RegistrationOneData.firstName.V1, 
           RegistrationOneData.lastName.V5, 
           RegistrationOneData.email.V9, 
           RegistrationOneData.password.V13, 
           RegistrationOneData.confirmPassword.V15, 
           RegistrationOneData.address.D9, 
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
        await expect(registration_onePage.addressError).toBeDisplayed();
    });

    it("TC#62, Address 11, Negative, (65 Characters)", async function () {
    // Navigate to the registration page
    await RegistrationOnePage.open();
    // Fill the phone number fields with test phone data
    await RegistrationOnePage.fullRegistration(
           RegistrationOneData.firstName.V1, 
           RegistrationOneData.lastName.V5, 
           RegistrationOneData.email.V9, 
           RegistrationOneData.password.V13, 
           RegistrationOneData.confirmPassword.V15, 
           RegistrationOneData.address.D10, 
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
        await expect(registration_onePage.addressError).toBeDisplayed();
    });

    

    //don't touch below this line
});
