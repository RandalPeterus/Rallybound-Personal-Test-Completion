import { $ } from '@wdio/globals'
import Page from './page.js';

class RegistrationTwoPage extends Page {
    // Check for text on the 2nd page
    get p2Text () {
        return $("//h2[@class='registerh2']")
    }
    // Solo option for team size
    get soloOption () {
        return $('/html[1]/body[1]/div[5]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[6]/div[1]/div[2]/fieldset[1]/div[1]/div[1]')
    }
    async submitSolo () {
        await this.soloOption.click()
    }
}

export default new RegistrationTwoPage()