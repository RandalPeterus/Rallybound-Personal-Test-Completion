import { $ } from '@wdio/globals'
import Page from './page.js';

class RegistrationOnePage extends Page {
    // Each entry pulls an element based on it's xpath (absolute for input boxes, relative for error divs)
    get firstNameInput () {
        return $('/html[1]/body[1]/div[5]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[6]/div[1]/div[1]/form[1]/fieldset[1]/fieldset[1]/input[1]')
    }
    get lastNameInput () {
        return $('/html[1]/body[1]/div[5]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[6]/div[1]/div[1]/form[1]/fieldset[1]/fieldset[2]/input[1]')
    }
    get emailInput () {
        return $('/html[1]/body[1]/div[5]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[6]/div[1]/div[1]/form[1]/fieldset[1]/div[2]/fieldset[1]/input[1]')
    }
    get passwordInput () {
        return $('/html[1]/body[1]/div[5]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[6]/div[1]/div[1]/form[1]/fieldset[1]/div[2]/fieldset[2]/input[1]')
    }
    get confirmPasswordInput () {
        return $('/html[1]/body[1]/div[5]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[6]/div[1]/div[1]/form[1]/fieldset[1]/div[2]/fieldset[3]/input[1]')
    }
    get addressInput () {
        return $('/html[1]/body[1]/div[5]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[6]/div[1]/div[1]/form[1]/fieldset[1]/fieldset[3]/input[1]')
    }
    get apt_ste_unitInput () {
        return $('/html[1]/body[1]/div[5]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[6]/div[1]/div[1]/form[1]/fieldset[1]/fieldset[4]/input[1]')
    }
    get countryInput () {
        return $('/html[1]/body[1]/div[5]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[6]/div[1]/div[1]/form[1]/fieldset[1]/fieldset[5]/div[1]/select[1]')
    }
    get cityInput () {
        return $('/html[1]/body[1]/div[5]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[6]/div[1]/div[1]/form[1]/fieldset[1]/fieldset[6]/input[1]')
    }
    get stateInput () {
        return $('/html[1]/body[1]/div[5]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[6]/div[1]/div[1]/form[1]/fieldset[1]/fieldset[7]/div[1]/select[1]')
    }
    get zipInput () {
        return $('/html[1]/body[1]/div[5]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[6]/div[1]/div[1]/form[1]/fieldset[1]/fieldset[10]/input[1]')
    }
    get phoneInput1 () {
        return $('/html[1]/body[1]/div[5]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[6]/div[1]/div[1]/form[1]/fieldset[1]/fieldset[11]/input[1]')
    }
    get phoneInput2 () {
        return $('/html[1]/body[1]/div[5]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[6]/div[1]/div[1]/form[1]/fieldset[1]/fieldset[11]/input[2]')
    }
    get phoneInput3 () {
        return $('/html[1]/body[1]/div[5]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[6]/div[1]/div[1]/form[1]/fieldset[1]/fieldset[11]/input[3]')
    }
    get submitButton () {
        return $('/html[1]/body[1]/div[5]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[6]/div[1]/div[1]/form[1]/fieldset[1]/div[7]/input[1]')
    }

    async fillForm (firstName, lastName, email, password, confirmPassword, address, apt_ste_unit, country, city, state, zip, phone1, phone2, phone3) {
        await this.firstNameInput.setValue(firstName)
        await this.lastNameInput.setValue(lastName)
        await this.emailInput.setValue(email)
        await this.passwordInput.setValue(password)
        await this.confirmPasswordInput.setValue(confirmPassword)
        await this.addressInput.setValue(address)
        await this.apt_ste_unitInput.setValue(apt_ste_unit)
        await this.countryInput.selectByIndex(country)
        await this.cityInput.setValue(city)
        await this.stateInput.selectByIndex(state)
        await this.zipInput.setValue(zip)
        await this.phoneInput1.setValue(phone1)
        await this.phoneInput2.setValue(phone2)
        await this.phoneInput3.setValue(phone3)
        await this.submitForm();
    }

    async countrySpecialFill (firstName, lastName, email, password, confirmPassword, address, apt_ste_unit, city, zip, phone1, phone2, phone3) {
        await this.firstNameInput.setValue(firstName)
        await this.lastNameInput.setValue(lastName)
        await this.emailInput.setValue(email)
        await this.passwordInput.setValue(password)
        await this.confirmPasswordInput.setValue(confirmPassword)
        await this.addressInput.setValue(address)
        await this.apt_ste_unitInput.setValue(apt_ste_unit)
        await this.cityInput.setValue(city)
        await this.zipInput.setValue(zip)
        await this.phoneInput1.setValue(phone1)
        await this.phoneInput2.setValue(phone2)
        await this.phoneInput3.setValue(phone3)
    }

    async submitForm () {
        await this.submitButton.click()
    }

    get firstNameError () {
        return $("//div[@id='firstName-errorDv']")
    }

    get lastNameError () {
        return $("//div[@id='lastName-errorDv']")
    }

    get emailError () {
        return $("//div[@id='emailAddress-errorDv']")
    }

    get passwordError () {
        return $("//div[@id='password-errorDv']")
    }

    get confirmPasswordError () {
        return $("//div[@id='confirmPassword-errorDv']")
    }

    get addressError () {
        return $("//div[@id='address1-errorDv']")
    }

    get apt_ste_unitError () {
        return $("//div[@id='address2-errorDv']")
    }

    get countryError () {
        return $("//div[@id='country-errorDv']")
    }

    get cityError () {
        return $("//div[@id='city-errorDv']")
    }

    get stateError () {
        return $("//div[@id='state-errorDv']")
    }

    get zipError () {
        return $("//div[@id='zip-errorDv']")
    }

    // There is only one error that appears for phone numbers
    get phoneError () {
        return $("//div[@id='phoneNumber3-errorDv']")
    }

    //Special Case for the full registration
    async getRanNumber(min, max) {
        // This function is called from the modifyEmail functuion and it's to help generate "new" emails when running a positive test cases
        return Math.floor(Math.random() * (max - min + 1)) + min;
        //this will return a random number with no decimals
    }
    // This helper function is using modifying the email to make a "new" one by making use of gmails + feature  
    // More info on this gmail feature can be founf here: https://support.cloudhq.net/how-to-setup-gmail-aliases/ 

    async modifyEmail(newEmail) { 
    //you can tell it how big or small 
    // getRanNumber is the function right above 
    const randomNumber = await this.getRanNumber(5, 5000);
    // Split the email into the local part and domain part 
    const parts = newEmail.split('@'); 
    // Check if the email is valid and contains an '@' 
    if (parts.length === 2) { 
    // Add the random number before the '@' sign notice that there is +a the beginning 
    parts[0] += `${randomNumber}`; 
    // Join the parts back together and set the new value in the registration form 
    await this.emailInput.setValue(parts.join('@'));
    } 
    else { 
    console.error('Invalid email address'); 
    return newEmail; 
    } 
} 

    //Full Registration version of filling the forum
    async fullRegistration(firstName, lastName, email, password, confirmPassword, address, apt_ste_unit, country, city, state, zip, phone1, phone2, phone3) {
        await this.firstNameInput.setValue(firstName)
        await this.lastNameInput.setValue(lastName)
        await this.modifyEmail(email)
        await this.passwordInput.setValue(password)
        await this.confirmPasswordInput.setValue(confirmPassword)
        await this.addressInput.setValue(address)
        await this.apt_ste_unitInput.setValue(apt_ste_unit)
        await this.countryInput.selectByIndex(country)
        await this.cityInput.setValue(city)
        await this.stateInput.selectByIndex(state)
        await this.zipInput.setValue(zip)
        await this.phoneInput1.setValue(phone1)
        await this.phoneInput2.setValue(phone2)
        await this.phoneInput3.setValue(phone3)
        
        await this.submitForm();
    }

    //country 
    dropdownLength () {
        return this.countryInput.$$('option').length;
    }

    open () {
        return super.open('Account/Register')
    }
}

export default new RegistrationOnePage()