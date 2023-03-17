

const { assert, expect } = require('chai');
const Page = require('./page');

/**
 * Home page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define home page selectors using getter methods
     */
    get categoryList() {
        return $('#nav-search-dropdown-card');
    }

    get categoryOptions() {
        return $('#searchDropdownBox');
    }

    get btnSearch() {
        return $('#nav-search-submit-button');
    }

    get searchInput() {
        return $('#twotabsearchtextbox');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async selectItemFromList(item) {

        await this.categoryList.click();
        await this.categoryOptions.selectByVisibleText(item);

    }

    async searchTerm(term){

        await this.searchInput.setValue(term);
        await this.btnSearch.click();

    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('/');
    }
}

module.exports = new HomePage();
