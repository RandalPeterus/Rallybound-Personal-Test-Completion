import RegistrationOnePage from "../pageobjects/registration_one.page.js";
import RegistrationOneData from "../registration_one_data.js";
import RegistrationTwoPage from "../pageobjects/registration_two.page.js";  
  
  //Test Set 3
describe("Password", () => { 
    it("TC#37 X9, Password 2, Negative, (No Uppercase)", async function () { 
    // Navigate to the registration page
    await RegistrationOnePage.open();
    // Fill the email field with test email from registration_one_data: 'p@ss1234'
    await RegistrationOnePage.fillForm(
       RegistrationOneData.firstName.V1,
       RegistrationOneData.lastName.V5,
       RegistrationOneData.email.V9,
       RegistrationOneData.password.X9,
       RegistrationOneData.confirmPassword.VX9,
       RegistrationOneData.address.V16,
       RegistrationOneData.apt_ste_unit.V19,
       RegistrationOneData.country.V22,
       RegistrationOneData.city.V25,
       RegistrationOneData.state.V29,
       RegistrationOneData.zip.V33,
       RegistrationOneData.phone1.V35,
       RegistrationOneData.phone2.V35,
       RegistrationOneData.phone3.V35
    );
    // Leave phone number and other optional fields empty
    // Submit the registration form
    // Assert that email validation passes (valid format) or fails (invalid email) and check for appropriate error message
    await expect(RegistrationOnePage.emailError).toBeDisplayed();
    });

    it("TC#38 X10, Password 3, Negative, (No Lowercase)", async function () {
      // Navigate to the registration page
      await RegistrationOnePage.open();
      // Fill the email field with test email from registration_one_data: 'P@SS1234'
      await RegistrationOnePage.fillForm(
         RegistrationOneData.firstName.V1,
         RegistrationOneData.lastName.V5,
         RegistrationOneData.email.V9,
         RegistrationOneData.password.X10,
         RegistrationOneData.confirmPassword.VX10,
         RegistrationOneData.address.V16,
         RegistrationOneData.apt_ste_unit.V19,
         RegistrationOneData.country.V22,
         RegistrationOneData.city.V25,
         RegistrationOneData.state.V29,
         RegistrationOneData.zip.V33,
         RegistrationOneData.phone1.V35,
         RegistrationOneData.phone2.V35,
         RegistrationOneData.phone3.V35
      );
      // Leave phone number and other optional fields empty
      // Submit the registration form
      // Assert that email validation passes (valid format) or fails (invalid email) and check for appropriate error message
      await expect(RegistrationOnePage.emailError).toBeDisplayed();
    });

    it("TC#39, X11, Password 4, Negative, (No Number)", async function () {
      // Navigate to the registration page
      await RegistrationOnePage.open();
      // Fill the email field with test email from registration_one_data: 'P@ssword'
      await RegistrationOnePage.fillForm(
         RegistrationOneData.firstName.V1,
         RegistrationOneData.lastName.V5,
         RegistrationOneData.email.V9,
         RegistrationOneData.password.X11,
         RegistrationOneData.confirmPassword.VX11,
         RegistrationOneData.address.V16,
         RegistrationOneData.apt_ste_unit.V19,
         RegistrationOneData.country.V22,
         RegistrationOneData.city.V25,
         RegistrationOneData.state.V29,
         RegistrationOneData.zip.V33,
         RegistrationOneData.phone1.V35,
         RegistrationOneData.phone2.V35,
         RegistrationOneData.phone3.V35
      );
      // Leave phone number and other optional fields empty
      // Submit the registration form
      // Assert that email validation passes (valid format) or fails (invalid email) and check for appropriate error message
      await expect(RegistrationOnePage.emailError).toBeDisplayed();
    });

    it("TC#40, X12, Password 5, Negative, (Password Same as First Name)", async function () {
      // Navigate to the registration page
      await RegistrationOnePage.open();
      // Fill the email field with test email from registration_one_data: 'Jimbo'
      await RegistrationOnePage.fillForm(
         RegistrationOneData.firstName.V1,
         RegistrationOneData.lastName.V5,
         RegistrationOneData.email.V9,
         RegistrationOneData.password.X12,
         RegistrationOneData.confirmPassword.VX12,
         RegistrationOneData.address.V16,
         RegistrationOneData.apt_ste_unit.V19,
         RegistrationOneData.country.V22,
         RegistrationOneData.city.V25,
         RegistrationOneData.state.V29,
         RegistrationOneData.zip.V33,
         RegistrationOneData.phone1.V35,
         RegistrationOneData.phone2.V35,
         RegistrationOneData.phone3.V35
      );
      // Leave phone number and other optional fields empty
      // Submit the registration form
      // Assert that email validation passes (valid format) or fails (invalid email) and check for appropriate error message
      await expect(RegistrationOnePage.emailError).toBeDisplayed();
    });

    it("TC#41, X13, Password 6, Negative, (Password Same as Last Name)", async function () {
      // Navigate to the registration page
      await RegistrationOnePage.open();
      // Fill the email field with test email from registration_one_data: 'Stevenson'
      await RegistrationOnePage.fillForm(
         RegistrationOneData.firstName.V1,
         RegistrationOneData.lastName.V5,
         RegistrationOneData.email.V9,
         RegistrationOneData.password.X13,
         RegistrationOneData.confirmPassword.VX13,
         RegistrationOneData.address.V16,
         RegistrationOneData.apt_ste_unit.V19,
         RegistrationOneData.country.V22,
         RegistrationOneData.city.V25,
         RegistrationOneData.state.V29,
         RegistrationOneData.zip.V33,
         RegistrationOneData.phone1.V35,
         RegistrationOneData.phone2.V35,
         RegistrationOneData.phone3.V35
      );
      // Leave phone number and other optional fields empty
      // Submit the registration form
      // Assert that email validation passes (valid format) or fails (invalid email) and check for appropriate error message
      await expect(RegistrationOnePage.emailError).toBeDisplayed();
    });

    it("TC#42, X14, Password 7, Negative, (Password Same as Email)", async function () {
      // Navigate to the registration page
      await RegistrationOnePage.open();
      // Fill the email field with test email from registration_one_data: 'ryan.sfiligoi+somethingvalid1@gmail.com'
      await RegistrationOnePage.fillForm(
         RegistrationOneData.firstName.V1,
         RegistrationOneData.lastName.V5,
         RegistrationOneData.email.V9,
         RegistrationOneData.password.X14,
         RegistrationOneData.confirmPassword.VX14,
         RegistrationOneData.address.V16,
         RegistrationOneData.apt_ste_unit.V19,
         RegistrationOneData.country.V22,
         RegistrationOneData.city.V25,
         RegistrationOneData.state.V29,
         RegistrationOneData.zip.V33,
         RegistrationOneData.phone1.V35,
         RegistrationOneData.phone2.V35,
         RegistrationOneData.phone3.V35
      );
      // Leave phone number and other optional fields empty
      // Submit the registration form
      // Assert that email validation passes (valid format) or fails (invalid email) and check for appropriate error message
      await expect(RegistrationOnePage.emailError).toBeDisplayed();
    });

    it("TC#43, X15, Password 8, Negative, (Blank Space)", async function () {
      // Navigate to the registration page
      await RegistrationOnePage.open();
      // Fill the email field with test email from registration_one_data: ''
      await RegistrationOnePage.fillForm(
         RegistrationOneData.firstName.V1,
         RegistrationOneData.lastName.V5,
         RegistrationOneData.email.V9,
         RegistrationOneData.password.X15,
         RegistrationOneData.confirmPassword.VX15,
         RegistrationOneData.address.V16,
         RegistrationOneData.apt_ste_unit.V19,
         RegistrationOneData.country.V22,
         RegistrationOneData.city.V25,
         RegistrationOneData.state.V29,
         RegistrationOneData.zip.V33,
         RegistrationOneData.phone1.V35,
         RegistrationOneData.phone2.V35,
         RegistrationOneData.phone3.V35
      );
      // Leave phone number and other optional fields empty
      // Submit the registration form
      // Assert that email validation passes (valid format) or fails (invalid email) and check for appropriate error message
      await expect(RegistrationOnePage.emailError).toBeDisplayed();
    });

    it("TC#44, B13, Password 9, Positive, (6 Characters)", async function () {
      // Navigate to the registration page
      await RegistrationOnePage.open();
      // Fill the email field with test email from registration_one_data: 'ryan.sfiligoi+somethingvalid1@gmail.com'
      await RegistrationOnePage.fillForm(
         RegistrationOneData.firstName.V1,
         RegistrationOneData.lastName.V5,
         RegistrationOneData.email.V9,
         RegistrationOneData.password.B13,
         RegistrationOneData.confirmPassword.VB13,
         RegistrationOneData.address.V16,
         RegistrationOneData.apt_ste_unit.V19,
         RegistrationOneData.country.V22,
         RegistrationOneData.city.V25,
         RegistrationOneData.state.V29,
         RegistrationOneData.zip.V33,
         RegistrationOneData.phone1.V35,
         RegistrationOneData.phone2.V35,
         RegistrationOneData.phone3.V35
      );
      // Leave phone number and other optional fields empty
      // Submit the registration form
      // Assert that email validation passes (valid format) or fails (invalid email) and check for appropriate error message
      await expect(RegistrationTwoPage.p2Text).toBeDisplayed();
    });

    it("TC#45, B14, Password 10, Positive, (64 Characters)", async function () {
      // Navigate to the registration page
      await RegistrationOnePage.open();
      // Fill the email field with test email from registration_one_data: 'P@ss123456789012345678901234567890123456789012345678901234567890'
      await RegistrationOnePage.fillForm(
         RegistrationOneData.firstName.V1,
         RegistrationOneData.lastName.V5,
         RegistrationOneData.email.V9,
         RegistrationOneData.password.B14,
         RegistrationOneData.confirmPassword.VB14,
         RegistrationOneData.address.V16,
         RegistrationOneData.apt_ste_unit.V19,
         RegistrationOneData.country.V22,
         RegistrationOneData.city.V25,
         RegistrationOneData.state.V29,
         RegistrationOneData.zip.V33,
         RegistrationOneData.phone1.V35,
         RegistrationOneData.phone2.V35,
         RegistrationOneData.phone3.V35
      );
      // Leave phone number and other optional fields empty
      // Submit the registration form
      // Assert that email validation passes (valid format) or fails (invalid email) and check for appropriate error message
      await expect(RegistrationTwoPage.p2Text).toBeDisplayed();
    });

    it("TC#46, B15, Password 11, Positive, (7 Characters)", async function () {
      // Navigate to the registration page
      await RegistrationOnePage.open();
      // Fill the email field with test email from registration_one_data: 'P@s12'
      await RegistrationOnePage.fillForm(
         RegistrationOneData.firstName.V1,
         RegistrationOneData.lastName.V5,
         RegistrationOneData.email.V9,
         RegistrationOneData.password.B15,
         RegistrationOneData.confirmPassword.VB15,
         RegistrationOneData.address.V16,
         RegistrationOneData.apt_ste_unit.V19,
         RegistrationOneData.country.V22,
         RegistrationOneData.city.V25,
         RegistrationOneData.state.V29,
         RegistrationOneData.zip.V33,
         RegistrationOneData.phone1.V35,
         RegistrationOneData.phone2.V35,
         RegistrationOneData.phone3.V35
      );
      // Leave phone number and other optional fields empty
      // Submit the registration form
      // Assert that email validation passes (valid format) or fails (invalid email) and check for appropriate error message
      await expect(RegistrationTwoPage.p2Text).toBeDisplayed();
    });
    it("TC#47, B16, Password 12, Positive, (63 Characters)", async function () {
      // Navigate to the registration page
      await RegistrationOnePage.open();
      // Fill the email field with test email from registration_one_data: 'P@ss123456789012345678901234567890123456789012345678901234567890'
      await RegistrationOnePage.fillForm(
         RegistrationOneData.firstName.V1,
         RegistrationOneData.lastName.V5,
         RegistrationOneData.email.V9,
         RegistrationOneData.password.B16,
         RegistrationOneData.confirmPassword.VB16,
         RegistrationOneData.address.V16,
         RegistrationOneData.apt_ste_unit.V19,
         RegistrationOneData.country.V22,
         RegistrationOneData.city.V25,
         RegistrationOneData.state.V29,
         RegistrationOneData.zip.V33,
         RegistrationOneData.phone1.V35,
         RegistrationOneData.phone2.V35,
         RegistrationOneData.phone3.V35
      );
      // Leave phone number and other optional fields empty
      // Submit the registration form
      // Assert that email validation passes (valid format) or fails (invalid email) and check for appropriate error message
      await expect(RegistrationTwoPage.p2Text).toBeDisplayed();
    });

    it("TC#48, D7, Password 13, Negative, (5 Characters)", async function () {
      // Navigate to the registration page
      await RegistrationOnePage.open();
      // Fill the email field with test email from registration_one_data: 'P@s12'
      await RegistrationOnePage.fillForm(
         RegistrationOneData.firstName.V1,
         RegistrationOneData.lastName.V5,
         RegistrationOneData.email.V9,
         RegistrationOneData.password.D7,
         RegistrationOneData.confirmPassword.VD7,
         RegistrationOneData.address.V16,
         RegistrationOneData.apt_ste_unit.V19,
         RegistrationOneData.country.V22,
         RegistrationOneData.city.V25,
         RegistrationOneData.state.V29,
         RegistrationOneData.zip.V33,
         RegistrationOneData.phone1.V35,
         RegistrationOneData.phone2.V35,
         RegistrationOneData.phone3.V35
      );
      // Leave phone number and other optional fields empty
      // Submit the registration form
      // Assert that email validation passes (valid format) or fails (invalid email) and check for appropriate error message
      await expect(RegistrationOnePage.emailError).toBeDisplayed();
    });

    it("TC#49, D8, Password 14, Negative, (65 Characters)", async function () {
      // Navigate to the registration page
      await RegistrationOnePage.open();
      // Fill the email field with test email from registration_one_data: 'P@ss1234567890123456789012345678901234567890123456789012345678901'
      await RegistrationOnePage.fillForm(
         RegistrationOneData.firstName.V1,
         RegistrationOneData.lastName.V5,
         RegistrationOneData.email.V9,
         RegistrationOneData.password.D8,
         RegistrationOneData.confirmPassword.VD8,
         RegistrationOneData.address.V16,
         RegistrationOneData.apt_ste_unit.V19,
         RegistrationOneData.country.V22,
         RegistrationOneData.city.V25,
         RegistrationOneData.state.V29,
         RegistrationOneData.zip.V33,
         RegistrationOneData.phone1.V35,
         RegistrationOneData.phone2.V35,
         RegistrationOneData.phone3.V35
      );
      // Leave phone number and other optional fields empty
      // Submit the registration form
      // Assert that email validation passes (valid format) or fails (invalid email) and check for appropriate error message
      await expect(RegistrationOnePage.emailError).toBeDisplayed();
    });

    it("TC#50, V14, Password 15, Positive, (Symbols Not Required)", async function () {
      // Navigate to the registration page
      await RegistrationOnePage.open();
      // Fill the email field with test email from registration_one_data: 'Pass1234'
      await RegistrationOnePage.fillForm(
         RegistrationOneData.firstName.V1,
         RegistrationOneData.lastName.V5,
         RegistrationOneData.email.V9,
         RegistrationOneData.password.V14,
         RegistrationOneData.confirmPassword.VV14,
         RegistrationOneData.address.V16,
         RegistrationOneData.apt_ste_unit.V19,
         RegistrationOneData.country.V22,
         RegistrationOneData.city.V25,
         RegistrationOneData.state.V29,
         RegistrationOneData.zip.V33,
         RegistrationOneData.phone1.V35,
         RegistrationOneData.phone2.V35,
         RegistrationOneData.phone3.V35
      );
      // Leave phone number and other optional fields empty
      // Submit the registration form
      // Assert that email validation passes (valid format) or fails (invalid email) and check for appropriate error message
      await expect(RegistrationTwoPage.p2Text).toBeDisplayed();
    });

    //Don't touch below here
  });