import LoginPage from "../POM/login.page"
import InventoryPage from "../POM/inventory.page"
const invPage = new InventoryPage()
const loginPage = new LoginPage()

describe('Product page tests after login', () => {
    before(async () => {
        await browser.url('https://www.saucedemo.com/')
        await loginPage.login('standard_user', 'secret_sauce')
        await loginPage.verifyPageIsOpen()
    })
    it('Check page title after login', async () => {
        await loginPage.verifyPageIsOpen()
        await expect(invPage.checkPageTitleForVisibility()).toBeTruthy()
    })
    
    it('Check inventory items after login', async () => {
        await loginPage.verifyPageIsOpen()
        await invPage.checkInventoryItemsDisplayed()
    })
    it('Sort products by Price (low to high)', async () => {
        const index = 2
        await invPage.sortProductsByIndex(index)
        const prices = await invPage.getInventoryItemPrices()
        const sortedPrices = [...prices].sort((a, b) => parseFloat(a.replace('$', '')) - parseFloat(b.replace('$', '')))
        expect(prices).toEqual(sortedPrices)
    })
    it('Add all products to cart', async () => {
        await invPage.addAllProductsToCart()
        const cartCount = await invPage.shoppingCartLink.getText()
        expect(cartCount).toBe('6')
    })
    it('Remove all products from cart', async () => {
        await invPage.removeAllProductsFromCart()
        const cartCountExists = await invPage.shoppingCartBadge.isExisting()
        expect(cartCountExists).toBe(false)
    })
    it('Open Burger menu and check logout link visibility', async () => {
        await expect(invPage.isBurgerMenuOpened()).toBeTruthy()
    })
    it('Logout from the application', async () => {
        await invPage.logout()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/')
        console.log('Logout successful')
    })
})