import RegistrationOnePage from "../pageobjects/registration_one.page.js";
import RegistrationOneData from "../registration_one_data.js";
import RegistrationTwoPage from "../pageobjects/registration_two.page.js";  
  
  //Test Set 3
describe.skip("Registration Email", () => { 
    it("TC#26 X7, Email 2, Negative, (No @ not in front of the domain)", async function () { 
    // Navigate to the registration page
    await RegistrationOnePage.open();
    // Fill the email field with test email from registration_one_data: 'ry@an.sfiligoigmail.com'
    await RegistrationOnePage.fillForm(
       RegistrationOneData.firstName.V1,
       RegistrationOneData.lastName.V5,
       RegistrationOneData.email.X7,
       RegistrationOneData.password.V13,
       RegistrationOneData.confirmPassword.V15,
       RegistrationOneData.address.V16,
       RegistrationOneData.apt_ste_unit.V20,
       RegistrationOneData.country.V23,
       RegistrationOneData.city.V26,
       RegistrationOneData.state.V30,
       RegistrationOneData.zip.V34,
       RegistrationOneData.phone1.V36,
       RegistrationOneData.phone2.V36,
       RegistrationOneData.phone3.V36
    );
    // Leave phone number and other optional fields empty
    // Submit the registration form
    // Assert that email validation passes (valid format) or fails (invalid email) and check for appropriate error message
    await expect(RegistrationOnePage.emailError).toBeDisplayed();
    });

    it("TC#27 X8, Email 3, Negative, (Blank Space)", async function () {
      //Navigate to the registration page
      await RegistrationOnePage.open();
      //Fill the email field with test email from registration_one_data: ''
      await RegistrationOnePage.fillForm(
         RegistrationOneData.firstName.V1,
         RegistrationOneData.lastName.V5,
         RegistrationOneData.email.X8,
         RegistrationOneData.password.V13,
         RegistrationOneData.confirmPassword.V15,
         RegistrationOneData.address.V16,
         RegistrationOneData.apt_ste_unit.V20,
         RegistrationOneData.country.V23,
         RegistrationOneData.city.V26,
         RegistrationOneData.state.V30,
         RegistrationOneData.zip.V34,
         RegistrationOneData.phone1.V36,
         RegistrationOneData.phone2.V36,
         RegistrationOneData.phone3.V36
      );
      // Leave phone number and other optional fields empty
      // Submit the registration form
      // Assert that email validation passes (valid format) or fails (invalid email) and check for appropriate error message
      await expect(RegistrationOnePage.emailError).toBeDisplayed();
   });

   it("TC#28 V10, Email 4, Positive, (Allow Symbols)", async function () {
      // Navigate to the registration page
      await RegistrationOnePage.open();
      // Fill the email field with test email from registration_one_data: 'ryan.sfiligoi+&@gmail.com'
      await RegistrationOnePage.fillForm(
         RegistrationOneData.firstName.V1,
         RegistrationOneData.lastName.V5,
         RegistrationOneData.email.V10,
         RegistrationOneData.password.V13,
         RegistrationOneData.confirmPassword.V15,
         RegistrationOneData.address.V16,
         RegistrationOneData.apt_ste_unit.V20,
         RegistrationOneData.country.V23,
         RegistrationOneData.city.V26,
         RegistrationOneData.state.V30,
         RegistrationOneData.zip.V34,
         RegistrationOneData.phone1.V36,
         RegistrationOneData.phone2.V36,
         RegistrationOneData.phone3.V36
      );
      // Leave phone number and other optional fields empty
      // Submit the registration form
      // Assert that email validation passes (valid format) or fails (invalid email) and check for appropriate error message
      await expect(RegistrationTwoPage.p2Text).toBeDisplayed();
   });

   it("TC#29 V11, Email 5, Positive, (Allow Digits)", async function () {
      // Navigate to the registration page
      await RegistrationOnePage.open();
      // Fill the email field with test email from registration_one_data: 'ryan.sfiligoi+67@gmail.com'
      await RegistrationOnePage.fillForm(
         RegistrationOneData.firstName.V1,
         RegistrationOneData.lastName.V5,
         RegistrationOneData.email.V11,
         RegistrationOneData.password.V13,
         RegistrationOneData.confirmPassword.V15,
         RegistrationOneData.address.V16,
         RegistrationOneData.apt_ste_unit.V20,
         RegistrationOneData.country.V23,
         RegistrationOneData.city.V26,
         RegistrationOneData.state.V30,
         RegistrationOneData.zip.V34,
         RegistrationOneData.phone1.V36,
         RegistrationOneData.phone2.V36,
         RegistrationOneData.phone3.V36
      );
      // Leave phone number and other optional fields empty
      // Submit the registration form
      // Assert that email validation passes (valid format) or fails (invalid email) and check for appropriate error message
      await expect(RegistrationTwoPage.p2Text).toBeDisplayed();
   });

   it("TC#30 V12, Email 6, Positive, (Allow Accents)", async function () {
      // Navigate to the registration page
      await RegistrationOnePage.open();
      // Fill the email field with test email from registration_one_data: 'ryan.sfiligoi+Rául@gmail.com'
      await RegistrationOnePage.fillForm(
         RegistrationOneData.firstName.V1,
         RegistrationOneData.lastName.V5,
         RegistrationOneData.email.V12,
         RegistrationOneData.password.V13,
         RegistrationOneData.confirmPassword.V15,
         RegistrationOneData.address.V16,
         RegistrationOneData.apt_ste_unit.V20,
         RegistrationOneData.country.V23,
         RegistrationOneData.city.V26,
         RegistrationOneData.state.V30,
         RegistrationOneData.zip.V34,
         RegistrationOneData.phone1.V36,
         RegistrationOneData.phone2.V36,
         RegistrationOneData.phone3.V36
      );
      // Leave phone number and other optional fields empty
      // Submit the registration form
      // Assert that email validation passes (valid format) or fails (invalid email) and check for appropriate error message
      await expect(RegistrationTwoPage.p2Text).toBeDisplayed();
   });

   it("TC#31 B9, Email 7, Positive, (7 Characters)", async function () {
      // Navigate to the registration page
      await RegistrationOnePage.open();
      // Fill the email field with test email from registration_one_data: 'ryan.s@gmail.com'
      await RegistrationOnePage.fillForm(
         RegistrationOneData.firstName.V1,
         RegistrationOneData.lastName.V5,
         RegistrationOneData.email.B9,
         RegistrationOneData.password.V13,
         RegistrationOneData.confirmPassword.V15,
         RegistrationOneData.address.V16,
         RegistrationOneData.apt_ste_unit.V20,
         RegistrationOneData.country.V23,
         RegistrationOneData.city.V26,
         RegistrationOneData.state.V30,
         RegistrationOneData.zip.V34,
         RegistrationOneData.phone1.V36,
         RegistrationOneData.phone2.V36,
         RegistrationOneData.phone3.V36
      );
      // Leave phone number and other optional fields empty
      // Submit the registration form
      // Assert that email validation passes (valid format) or fails (invalid email) and check for appropriate error message
      await expect(RegistrationTwoPage.p2Text).toBeDisplayed();
   });

   it("TC#32 B10, Email 8, Positive, (64 Characters)", async function () {
      // Navigate to the registration page
      await RegistrationOnePage.open();
      // Fill the email field with test email from registration_one_data: 'ryan.sfiligoi+smittywarbenjaegermanjensonsmittywarbenjaegermanje@gmail.com'
      await RegistrationOnePage.fillForm(
         RegistrationOneData.firstName.V1,
         RegistrationOneData.lastName.V5,
         RegistrationOneData.email.B10,
         RegistrationOneData.password.V13,
         RegistrationOneData.confirmPassword.V15,
         RegistrationOneData.address.V16,
         RegistrationOneData.apt_ste_unit.V20,
         RegistrationOneData.country.V23,
         RegistrationOneData.city.V26,
         RegistrationOneData.state.V30,
         RegistrationOneData.zip.V34,
         RegistrationOneData.phone1.V36,
         RegistrationOneData.phone2.V36,
         RegistrationOneData.phone3.V36
      );
      // Leave phone number and other optional fields empty
      // Submit the registration form
      // Assert that email validation passes (valid format) or fails (invalid email) and check for appropriate error message
      await expect(RegistrationTwoPage.p2Text).toBeDisplayed();
   });

   it("TC#33 B11, Email 9, Positive, (8 Characters)", async function () {
      // Navigate to the registration page
      await RegistrationOnePage.open();
      // Fill the email field with test email from registration_one_data: 'ryan.sfi@gmail.com'
      await RegistrationOnePage.fillForm(
         RegistrationOneData.firstName.V1,
         RegistrationOneData.lastName.V5,
         RegistrationOneData.email.B11,
         RegistrationOneData.password.V13,
         RegistrationOneData.confirmPassword.V15,
         RegistrationOneData.address.V16,
         RegistrationOneData.apt_ste_unit.V20,
         RegistrationOneData.country.V23,
         RegistrationOneData.city.V26,
         RegistrationOneData.state.V30,
         RegistrationOneData.zip.V34,
         RegistrationOneData.phone1.V36,
         RegistrationOneData.phone2.V36,
         RegistrationOneData.phone3.V36
      );
      // Leave phone number and other optional fields empty
      // Submit the registration form
      // Assert that email validation passes (valid format) or fails (invalid email) and check for appropriate error message
      await expect(RegistrationTwoPage.p2Text).toBeDisplayed();
   });

   it("TC#34 B12, Email 10, Positive, (63 Characters)", async function () {
      // Navigate to the registration page
      await RegistrationOnePage.open();
      // Fill the email field with test email from registration_one_data: 'ryan.sfiligoi+smittywarbenjaegermanjensonsmittywarbenjaegermanjen@gmail.com'
      await RegistrationOnePage.fillForm(
         RegistrationOneData.firstName.V1,
         RegistrationOneData.lastName.V5,
         RegistrationOneData.email.B12,
         RegistrationOneData.password.V13,
         RegistrationOneData.confirmPassword.V15,
         RegistrationOneData.address.V16,
         RegistrationOneData.apt_ste_unit.V20,
         RegistrationOneData.country.V23,
         RegistrationOneData.city.V26,
         RegistrationOneData.state.V30,
         RegistrationOneData.zip.V34,
         RegistrationOneData.phone1.V36,
         RegistrationOneData.phone2.V36,
         RegistrationOneData.phone3.V36
      );
      // Leave phone number and other optional fields empty
      // Submit the registration form
      // Assert that email validation passes (valid format) or fails (invalid email) and check for appropriate error message
      await expect(RegistrationTwoPage.p2Text).toBeDisplayed();
   });

   it("TC#35 D5, Email 11, Negative, (6 Characters)", async function () {
      // Navigate to the registration page
      await RegistrationOnePage.open();
      // Fill the email field with test email from registration_one_data: 'ryan.s@gmail.com'
      await RegistrationOnePage.fillForm(
         RegistrationOneData.firstName.V1,
         RegistrationOneData.lastName.V5,
         RegistrationOneData.email.D5,
         RegistrationOneData.password.V13,
         RegistrationOneData.confirmPassword.V15,
         RegistrationOneData.address.V16,
         RegistrationOneData.apt_ste_unit.V20,
         RegistrationOneData.country.V23,
         RegistrationOneData.city.V26,
         RegistrationOneData.state.V30,
         RegistrationOneData.zip.V34,
         RegistrationOneData.phone1.V36,
         RegistrationOneData.phone2.V36,
         RegistrationOneData.phone3.V36
      );
      // Leave phone number and other optional fields empty
      // Submit the registration form
      // Assert that email validation passes (valid format) or fails (invalid email) and check for appropriate error message
      await expect(RegistrationOnePage.emailError).toBeDisplayed();
   });

   it("TC#36 D6, Email 12, Negative, (65 Characters)", async function () {
      // Navigate to the registration page
      await RegistrationOnePage.open();
      // Fill the email field with test email from registration_one_data: 'ryan.sfiligoi+smittywarbenjaegermanjensonsmittywarbenjaegermanjen@gmail.com'
      await RegistrationOnePage.fillForm(
         RegistrationOneData.firstName.V1,
         RegistrationOneData.lastName.V5,
         RegistrationOneData.email.D6,
         RegistrationOneData.password.V13,
         RegistrationOneData.confirmPassword.V15,
         RegistrationOneData.address.V16,
         RegistrationOneData.apt_ste_unit.V20,
         RegistrationOneData.country.V23,
         RegistrationOneData.city.V26,
         RegistrationOneData.state.V30,
         RegistrationOneData.zip.V34,
         RegistrationOneData.phone1.V36,
         RegistrationOneData.phone2.V36,
         RegistrationOneData.phone3.V36
      );
      // Leave phone number and other optional fields empty
      // Submit the registration form
      // Assert that email validation passes (valid format) or fails (invalid email) and check for appropriate error message
      await expect(RegistrationOnePage.emailError).toBeDisplayed();
   });
  });