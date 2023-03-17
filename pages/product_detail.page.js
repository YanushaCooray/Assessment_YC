

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductDetailPage extends Page {
    /**
     * define selectors of this page using getter methods
     */
    get itemPrice() {
        return $('//span[@class="a-size-base a-color-price a-color-price"]');
    }

    get productName() {
        return $('//span[@id="productTitle"]')
    }

    get quantityDropdown() {
        return $('//*[@id="a-autoid-0"]')
    }

    getquantity(index) {
        return $('(//*[contains(@class,"a-dropdown-item")])[' + index + ']')
    }

    get addToCart() {
        return $('#add-to-cart-button')
    }

    get goToCart() {
        return $('#sw-gtc > span > a')
    }

    /* 
     define the methods
    */
    async getItemPrice() {
        return await this.itemPrice.getText();
    }

    async selectQuantity(index) {
        await this.quantityDropdown.click()
        await this.getquantity(index).click()
    }

}
module.exports = new ProductDetailPage();