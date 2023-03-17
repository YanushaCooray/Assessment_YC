

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AutoamtionBookPage extends Page {
    /**
     * define selectors of this page using getter methods
     */
    get sortBy() {
        return $('#a-autoid-0-announce');
    }

    get customerReview() {
        return $('#s-result-sort-select_3');
    }

    get startsNup() {
        return $('//*[@id="p_72/1250221011"]');
    }

    getItemFromList(index) {
        return $('(//a[@class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"])[' + index + ']');
    }


    getLanguageBox(language) {
        return $('//span[contains(@class, "a-size-base a-color-base") and text() = "' + language + '"]');
    }

    getSelectedItem(name){
        return  $('//*[text()[normalize-space() = "' + name + '"]]');
    }

    /* 
     define the methods
    */
    async filterByCustomerReview() {
        await this.sortBy.click();
        await this.customerReview.waitForDisplayed();
        await this.customerReview.click();
        await browser.pause(2000);
    }



    async selectBestReviewedBooks() {
        await this.startsNup.scrollIntoView()
        await this.startsNup.click();
        await browser.pause(2000);
    }

    async selectLanguage(language) {
        await this.getLanguageBox(language).scrollIntoView()
        await this.getLanguageBox(language).click()
        await browser.pause(2000);
    }

    async getSelectedItemName(index) {
        return await this.getItemFromList(index).getText();
    }

    async naviagatesToSelectedItem(itemName){
        await this.getSelectedItem(itemName).click();
    }

}

module.exports = new AutoamtionBookPage();
