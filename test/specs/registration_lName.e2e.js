import RegistrationOnePage from "../pageobjects/registration_one.page.js";
import RegistrationOneData from "../registration_one_data.js";
import RegistrationTwoPage from "../pageobjects/registration_two.page.js"; 

//Test Set 2
describe("Registration Last Name", () => { 
    it("TC#14 V6, Last Name 2, positive, (Hyphens Allowed)", async function () { 
    // Navigate to the registration page
    await RegistrationOnePage.open();
    // Fill the last name field with test data from registration_one_data: Li-An
    await RegistrationOnePage.fillForm(
       RegistrationOneData.firstName.V1,
       RegistrationOneData.lastName.V6,
       RegistrationOneData.email.V9,
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
    // Leave other required fields with default values
    // Submit the registration form
    // Assert that the form accepts the last name or displays appropriate validation error
    await expect(RegistrationTwoPage.p2Text).toBeDisplayed();
    });

    it("TC#15 V7, Last Name 3, positive, (Apostrophes Allowed)", async function () {
    // Navigate to the registration page
    await RegistrationOnePage.open();
    // Fill the last name field with test data from registration_one_data: O'Malley
    await RegistrationOnePage.fillForm(
       RegistrationOneData.firstName.V1,
       RegistrationOneData.lastName.V7,
       RegistrationOneData.email.V9,
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
    // Leave other required fields with default values
    // Submit the registration form
    // Assert that the form accepts the last name or displays appropriate validation error
    await expect(RegistrationTwoPage.p2Text).toBeDisplayed();
    });

    it("TC#16 V8, Last Name 4, positive, (Accents Allowed)", async function () {
    // Navigate to the registration page
    await RegistrationOnePage.open();
    // Fill the last name field with test data from registration_one_data: José
    await RegistrationOnePage.fillForm(
       RegistrationOneData.firstName.V1,
       RegistrationOneData.lastName.V8,
       RegistrationOneData.email.V9,
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
    // Leave other required fields with default values
    // Submit the registration form
    // Assert that the form accepts the last name or displays appropriate validation error
    await expect(RegistrationTwoPage.p2Text).toBeDisplayed();
    });

    it("TC#17 X4, Last Name 5, Negative, (Symbol(s) Included.)", async function () {
    // Navigate to the registration page
    await RegistrationOnePage.open();
    // Fill the last name field with test data from registration_one_data: St@n
    await RegistrationOnePage.fillForm(
       RegistrationOneData.firstName.V1,
       RegistrationOneData.lastName.X4,
       RegistrationOneData.email.V9,
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
    // Leave other required fields with default values
    // Submit the registration form
    // Assert that the form accepts the last name or displays appropriate validation error
    await expect(RegistrationOnePage.lastNameError).toBeDisplayed();
    });

    it("TC#18 X5, Last Name 6, Negative, (Numbers Included.)", async function () {
    // Navigate to the registration page
    await RegistrationOnePage.open();
    // Fill the last name field with test data from registration_one_data: Ben10
    await RegistrationOnePage.fillForm(
       RegistrationOneData.firstName.V1,
       RegistrationOneData.lastName.X5,
       RegistrationOneData.email.V9,
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
    // Leave other required fields with default values
    // Submit the registration form
    // Assert that the form accepts the last name or displays appropriate validation error
    await expect(RegistrationOnePage.lastNameError).toBeDisplayed();
    });
    it("TC#19 X6, Last Name 7, Negative, (Blank Space)", async function () {
    // Navigate to the registration page
    await RegistrationOnePage.open();
    // Fill the last name field with test data from registration_one_data: '          ' (blank space is in single quotes, hard to see)
    await RegistrationOnePage.fillForm(
       RegistrationOneData.firstName.V1,
       RegistrationOneData.lastName.X6,
       RegistrationOneData.email.V9,
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
    // Leave other required fields with default values
    // Submit the registration form
    // Assert that the form accepts the last name or displays appropriate validation error
    await expect(RegistrationOnePage.lastNameError).toBeDisplayed();
    });

    it("TC#20 B5, Last Name 8, Positive, (3 Characters)", async function () {
    // Navigate to the registration page
    await RegistrationOnePage.open();
    // Fill the last name field with test data from registration_one_data: 'Dan'
    await RegistrationOnePage.fillForm(
       RegistrationOneData.firstName.V1,
       RegistrationOneData.lastName.B5,
       RegistrationOneData.email.V9,
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
    // Leave other required fields with default values
    // Submit the registration form
    // Assert that the form accepts the last name or displays appropriate validation error
    await expect(RegistrationTwoPage.p2Text).toBeDisplayed();
});

it("TC#21 B6, Last Name 9, Positive, (64 Characters)", async function () {
    // Navigate to the registration page
    await RegistrationOnePage.open();
    // Fill the last name field with test data from registration_one_data: 'ReadableLetterStringThatIsEasyToSeeAndCountWithoutAnyNumbersHere'
    await RegistrationOnePage.fillForm(
       RegistrationOneData.firstName.V1,
       RegistrationOneData.lastName.B6,
       RegistrationOneData.email.V9,
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
    // Leave other required fields with default values
    // Submit the registration form
    // Assert that the form accepts the last name or displays appropriate validation error
    await expect(RegistrationTwoPage.p2Text).toBeDisplayed();
});

it("TC#22 B7, Last Name 10, Positive, (4 Characters)", async function () {
    // Navigate to the registration page
    await RegistrationOnePage.open();
    // Fill the last name field with test data from registration_one_data: 'Dani'
    await RegistrationOnePage.fillForm(
       RegistrationOneData.firstName.V1,
       RegistrationOneData.lastName.B7,
       RegistrationOneData.email.V9,
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
    // Leave other required fields with default values
    // Submit the registration form
    // Assert that the form accepts the last name or displays appropriate validation error
    await expect(RegistrationTwoPage.p2Text).toBeDisplayed();
});

it("TC#23 B8, Last Name 11, Positive, (63 Characters)", async function () {
    // Navigate to the registration page
    await RegistrationOnePage.open();
    // Fill the last name field with test data from registration_one_data: 'eadableLetterStringThatIsEasyToSeeAndCountWithoutAnyNumbersHere'
    await RegistrationOnePage.fillForm(
       RegistrationOneData.firstName.V1,
       RegistrationOneData.lastName.B8,
       RegistrationOneData.email.V9,
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
    // Leave other required fields with default values
    // Submit the registration form
    // Assert that the form accepts the last name or displays appropriate validation error
    await expect(RegistrationTwoPage.p2Text).toBeDisplayed();
});

it("TC#24 D3, Last Name 12, Negative, (2 Characters)", async function () {
    // Navigate to the registration page
    await RegistrationOnePage.open();
    // Fill the last name field with test data from registration_one_data: 'Pd'
    await RegistrationOnePage.fillForm(
       RegistrationOneData.firstName.V1,
       RegistrationOneData.lastName.D3,
       RegistrationOneData.email.V9,
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
    // Leave other required fields with default values
    // Submit the registration form
    // Assert that the form accepts the last name or displays appropriate validation error
    await expect(RegistrationOnePage.lastNameError).toBeDisplayed();
});

it("TC#25 D4, Last Name 13, Negative, (65 Characters)", async function () {
    // Navigate to the registration page
    await RegistrationOnePage.open();
    // Fill the last name field with test data from registration_one_data: 'ReadableLetterStringThatIsEasyToSeeAndCountWithoutAnyNumbersHereA'
    await RegistrationOnePage.fillForm(
       RegistrationOneData.firstName.V1,
       RegistrationOneData.lastName.D4,
       RegistrationOneData.email.V9,
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
    // Leave other required fields with default values
    // Submit the registration form
    // Assert that the form accepts the last name or displays appropriate validation error
    await expect(RegistrationOnePage.lastNameError).toBeDisplayed();
});
});