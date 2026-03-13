import { $ } from '@wdio/globals'
import Page from './page.js';

class RegistrationFourPage extends Page {
    // Additional donation
    get addDonate () {
        return $("//input[@value='+ Add Additional Donation']")
    }
    // Complete button
    get complete () {
        return $("//input[@id='registerSubmitForm']")
    }
    // Registration popup text
    get regConfirm () {
        return $("//h3[normalize-space()='Thank you for your registration!']")
    }
    // Continue to profile
    get completed () {
        return $("//input[@id='regPopButton']")
    }
}

export default new RegistrationFourPage()