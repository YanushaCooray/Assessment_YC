const Page = require('./page');

class CartPage extends Page {

get bookNameByCart() {
    return $('//span[@class="a-truncate-cut"]')
}

get quantityByCart() {
    return $('//*[@class="a-dropdown-prompt"]')
}

get totalPrice() {
    return $('#sc-subtotal-amount-activecart')
}

get deleteBtn() {
    return $('(//*[@class="a-color-link"])[1]')
}

}
module.exports = new CartPage();