import { $ } from '@wdio/globals'
import Page from './page.js';

class RegistrationThreePage extends Page {
    // Fundraising goal input box
    get fundGoalBox () {
        return $("//input[@id='walkerGoalAmount']")
    }
    // Gender Dropdown
    get transRights () {
        return $("//select[@id='walkerProduct50125']")
    }
    // T-shirt size
    get shirtSize () {
        return $("#walkerProduct50128")
    }
    //Reg Fee
    get regFee () {
        return $("#walkerProduct50123")
    }
    // Autism relationship
    get autismRelation () {
        return $("//select[@id='walkerProduct50124']")
    }
    // Waiver checkbox
    get waiver () {
        return $("//input[@id='termsAgree']")
    }
    // Continue button
    get p3Continue () {
        return $("//input[@id='register3Next']")
    }
    async setFundGoal(amount) {
        await this.fundGoalBox.setValue(amount);
    }
    async genderSelect(gender) {
        await this.transRights.selectByIndex(gender);
    }
    async shirtSelect(size) {
        await this.shirtSize.selectByIndex(size);
    }
    async selectAutismRelation(relation) {
        await this.autismRelation.selectByIndex(relation);
    }
    async selectRegFee(fee) {
        await this.regFee.selectByIndex(fee);
    }
}
export default new RegistrationThreePage()