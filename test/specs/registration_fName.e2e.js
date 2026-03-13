import RegistrationOnePage from "../pageobjects/registration_one.page.js";
import RegistrationOneData from "../registration_one_data.js";
import RegistrationTwoPage from "../pageobjects/registration_two.page.js";

//Test Set 1
describe("First Name Tests", () => { 
    it("TC#2 V2, First Name 2, positive, (Hyphens Allowed)", async function () { 
    // Navigate to the registration page
    await RegistrationOnePage.open();
    // Fill the first name field with test data from registration_one_data: John-Jacob
    await RegistrationOnePage.fillForm(
       RegistrationOneData.firstName.V2, 
       RegistrationOneData.lastName.V5, 
       RegistrationOneData.email.V9, 
       RegistrationOneData.password.V13, 
       RegistrationOneData.confirmPassword.V15, 
       RegistrationOneData.address.V16, 
       RegistrationOneData.apt_ste_unit.V19, 
       RegistrationOneData.country.V22, 
       RegistrationOneData.city.V25, 
       RegistrationOneData.state.V29, 
       RegistrationOneData.zip.V33, 
       RegistrationOneData.phone1.V35, 
       RegistrationOneData.phone2.V35, 
       RegistrationOneData.phone3.V35);
    // Leave other required fields with default values
    // Submit the registration form 
    // Assert that either a success message appears or an appropriate validation error is displayed for the first name field
    await expect(RegistrationTwoPage.p2Text).toBeDisplayed();
    });

    it.skip("TC#3 V3, First Name 3, positive, (Apostrophies Allowed)", async function () { 
    // Navigate to the registration page
    // Fill the first name field with test data from registration_one_data: O'connel
    // Leave other required fields with default values
    // Submit the registration form 
    // Assert that either a success message appears or an appropriate validation error is displayed for the first name field
    });

    it.skip("TC#4 V4, First Name 4, positive, (Accents Allowed)", async function () { 
    // Navigate to the registration page
    // Fill the first name field with test data from registration_one_data: Rául
    // Leave other required fields with default values
    // Submit the registration form 
    // Assert that either a success message appears or an appropriate validation error is displayed for the first name field
    });

    it.skip("TC#5 X1, First Name 5, Negative, (Symbol(s) Included.)", async function () { 
    // Navigate to the registration page
    // Fill the first name field with test data from registration_one_data: B@rt
    // Leave other required fields with default values
    // Submit the registration form 
    // Assert that either a success message appears or an appropriate validation error is displayed for the first name field
    });

    it.skip("TC#5 X2, First Name 6, Negative, (Number(s) Included", async function () { 
    // Navigate to the registration page
    // Fill the first name field with test data from registration_one_data: Agent 47
    // Leave other required fields with default values
    // Submit the registration form 
    // Assert that either a success message appears or an appropriate validation error is displayed for the first name field
    });

    it.skip("TC#5 X3, First Name 7, Negative, (Blank Space)", async function () { 
    // Navigate to the registration page
    // Fill the first name field with test data from registration_one_data: '          ' (blank space is in single quotes, hard to see)
    // Leave other required fields with default values
    // Submit the registration form 
    // Assert that either a success message appears or an appropriate validation error is displayed for the first name field
    });

    it.skip("TC#6 B1, First Name 8, Positive, (3 Characters)", async function () { 
    // Navigate to the registration page
    // Fill the first name field with test data from registration_one_data: Gus
    // Leave other required fields with default values
    // Submit the registration form 
    // Assert that either a success message appears or an appropriate validation error is displayed for the first name field
    });
    
    it.skip("TC#7 B2, First Name 9, Positive, (64 Characters)", async function () { 
    // Navigate to the registration page
    // Fill the first name field with test data from registration_one_data: A 64-character long first name
    // Leave other required fields with default values
    // Submit the registration form 
    // Assert that either a success message appears or an appropriate validation error is displayed for the first name field
    });

    it.skip("TC#8 B3, First Name 10, Positive, (4 Characters)", async function () { 
    // Navigate to the registration page
    // Fill the first name field with test data from registration_one_data: A 65-character long first name
    // Leave other required fields with default values
    // Submit the registration form 
    // Assert that either a success message appears or an appropriate validation error is displayed for the first name field
    });

    it.skip("TC#9 B4, First Name 11, Positive, (63 Characters)", async function () { 
    // Navigate to the registration page
    // Fill the first name field with test data from registration_one_data: A more than 65-character long first name
    // Leave other required fields with default values
    // Submit the registration form 
    // Assert that either a success message appears or an appropriate validation error is displayed for the first name field
    });

    it.skip("TC#10 D1, First Name 12, Negative, (2 characters)", async function () { 
    // Navigate to the registration page
    // Fill the first name field with test data from registration_one_data: Ug
    // Leave other required fields with default values
    // Submit the registration form 
    // Assert that either a success message appears or an appropriate validation error is displayed for the first name field
    });

    it.skip("TC#11 D2, First Name 13, Negative, (65 Characters)", async function () { 
    // Navigate to the registration page
    // Fill the first name field with test data from registration_one_data: A 65-character long first name
    // Leave other required fields with default values
    // Submit the registration form 
    // Assert that either a success message appears or an appropriate validation error is displayed for the first name field
});
});