const { assert, expect } = require('chai')
const AutoamtionBookPage = require('../../pages/autoamtion_book.page')
const HomePage = require('../../pages/home.page')
const CartPage = require('../../pages/cart.page')
const ProductDetailPage = require('../../pages/product_detail.page')
const constants = require('../../constants')


describe('Amazon Ecommerce Web Site - Autoamtion Test Cases', () => {

    let itemPrice;
    let itemName;

    before(async () => {
        await browser.maximizeWindow();
    })

    it('TEST_0001 - Verify that selected product name is equal to the 2nd item of product list', async () => {

        await HomePage.open();
        await HomePage.selectItemFromList(constants.ITEM);
        await HomePage.searchTerm(constants.SEARCH_TERM);

        await AutoamtionBookPage.filterByCustomerReview();
        await AutoamtionBookPage.selectBestReviewedBooks();
        await AutoamtionBookPage.selectLanguage(constants.LANGUAGE);
        itemName = await AutoamtionBookPage.getSelectedItemName(constants.ITEM_INDEX);
        AutoamtionBookPage.naviagatesToSelectedItem(itemName);
        itemPrice = await ProductDetailPage.getItemPrice();
        let productName = await ProductDetailPage.productName.getText();

        assert.equal(productName, itemName);

    })

    it('TEST_0002 - Verify that product name , price & quantity is displayed correctly', async () => {

        await ProductDetailPage.selectQuantity(constants.QUANTITY);
        await ProductDetailPage.addToCart.click();
        await ProductDetailPage.goToCart.click();

        let totalAmount = await CartPage.totalPrice.getText();
        let expectedAmount = itemPrice.replace('$', '')

        assert.equal(await CartPage.bookNameByCart.getText(), itemName);
        assert.equal(await CartPage.quantityByCart.getText(), constants.QUANTITY);
        assert.equal(expectedAmount * 2, totalAmount.replace('$', ''));

    })

    it('TEST_0003 - Verify that total amount is equal to $0.00 ', async () => {

        await CartPage.deleteBtn.click();
        let newTotalAmount = await CartPage.totalPrice.getText();
        assert.equal(newTotalAmount, ' $0.00')

    })

})
