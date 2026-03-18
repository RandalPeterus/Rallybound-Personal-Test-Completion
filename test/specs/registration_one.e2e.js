import RegistrationOnePage from "../pageobjects/registration_one.page.js";
import RegistrationOneData from "../registration_one_data.js";
import RegistrationTwoPage from "../pageobjects/registration_two.page.js";
import RegistrationThreePage from "../pageobjects/registration_three.page.js";
import RegistrationFourPage from "../pageobjects/registration_four.page.js";

//first name tests
describe("Full Registration Tests", () => { 
    it("TC#1 Full Registration Test (Default Test Case)", async function () { 
    // Navigate to the registration page
    await RegistrationOnePage.open();

    // // Fill the first name field with test data from registration_one_data: Jimbo
    await RegistrationOnePage.fullRegistration(
       RegistrationOneData.firstName.V1, 
       RegistrationOneData.lastName.V5, 
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
       RegistrationOneData.phone3.V36);
    // call function to generate random email and put information in the form.
    // the ModifyEmail function modifys the email field to be unique for each test run by using the Gmails + feature.
    // Submit the registration form 
    // Assert that either a success message appears or an appropriate validation error is displayed for the first name field
    await expect(RegistrationTwoPage.p2Text).toBeDisplayed();
    // click on the option that says "solo"
    await RegistrationTwoPage.submitSolo();
    // confirm you are on step 3 of the registration process
    await expect(RegistrationThreePage.fundGoalBox).toBeDisplayed();
    // set the fundraising goal to $0
    await RegistrationThreePage.setFundGoal('0');
    // select Gender, Race Reg fee, T-Shirt Size and Relation to Autism.
    await RegistrationThreePage.genderSelect('1');
    await RegistrationThreePage.shirtSelect('3');
    await RegistrationThreePage.selectAutismRelation('1');
    await RegistrationThreePage.selectRegFee('1');
    // The check 'Agree to waiver" box
    await RegistrationThreePage.waiver.click();
    // click continue 
    await RegistrationThreePage.p3Continue.click();
    //browser.pause(3000);
    // confirm you are on step 4 of the registration process
    await expect(RegistrationFourPage.complete).toBeDisplayed();
    // click 'complete registration' button
    await RegistrationFourPage.complete.click();
    // Identify "Thank you for registeration" message to confirm successful registration.
    await expect(RegistrationFourPage.completed).toBeDisplayed();
    });
    });