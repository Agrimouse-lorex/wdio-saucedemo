import LoginPage from "../POM/login.page"
import InventoryPage from "../POM/inventory.page"
const invPage = new InventoryPage()
const loginPage = new LoginPage()

describe('Product page tests after login', function() {
    before(async () => {
        await browser.url('https://www.saucedemo.com/')
        await loginPage.login('standard_user', 'secret_sauce')
        await loginPage.checkUrl()
    })
    it('Check product title after login', async () => {
        await loginPage.checkUrl()
        await invPage.checkProductTitle()
        console.log('Product title is displayed after login')
    })
    it('Check inventory items after login', async () => { 
        await loginPage.checkUrl()
        await invPage.checkInventoryItemsDisplayed()
        console.log('Inventory items are displayed after login')
    })
    it('Sort products by Price (low to high)', async () => {
        await invPage.sortProductsBy('Price (low to high)')
        const prices = await invPage.getInventoryItemPrices()
        const sortedPrices = [...prices].sort((a, b) => parseFloat(a.replace('$', '')) - parseFloat(b.replace('$', '')))
        expect(prices).toEqual(sortedPrices)
        console.log('Products sorted by Price (low to high) successfully')
    })
    it('Add all products to cart', async () => {
        await invPage.addAllProductsToCart()
        const cartCount = await invPage.shoppingCartLink.getText()
        expect(cartCount).toBe('6')
        console.log('All products added to cart successfully')
    })
    it('Remove all products from cart', async () => {
        await invPage.removeAllProductsFromCart()
        const cartCountExists = await invPage.shoppingCartLink.isExisting()
        expect(cartCountExists).toBe(false)
        console.log('All products removed from cart successfully')
    })
    it('Logout from the application', async () => {
        await invPage.logout()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/')
        console.log('Logout successful')
    })
    it('Open Burger menu and check logout link visibility', async () => {
        await invPage.burgerMenuButton.click()
        await expect(invPage.logoutLink).toBeDisplayed()
        console.log('Burger menu opened and logout link is visible')
    })
})