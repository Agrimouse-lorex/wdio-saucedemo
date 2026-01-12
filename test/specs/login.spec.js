import LoginPage from "../POM/login.page"
import InventoryPage from "../POM/inventory.page"
const loginPage = new LoginPage()
const invPage = new InventoryPage()


describe.skip('SauceDemo login test', function() {
    it('Login as standart user', async () => {
        await browser.url('https://www.saucedemo.com/')
        await loginPage.login('standard_user', 'secret_sauce')
        await loginPage.loginCheck()
        await loginPage.checkUrl()
    })
    it('Login as locked out user', async () => {
        await browser.url('https://www.saucedemo.com/')
        await loginPage.login('locked_out_user', 'secret_sauce')
        await loginPage.errorMessageCheck()
    })
    it('Login as problem user', async () => {
        await browser.url('https://www.saucedemo.com/')
        await loginPage.login('problem_user', 'secret_sauce')
        await loginPage.loginCheck()
        await loginPage.checkUrl()
    })
    it('Login as performance glitch user', async () => {
        await browser.url('https://www.saucedemo.com/')
        await loginPage.login('performance_glitch_user', 'secret_sauce')
        await loginPage.loginCheck()
        await loginPage.checkUrl()
    })
    it('Login with error credentials', async () => {
        await browser.url('https://www.saucedemo.com/')
        await loginPage.login('error_user', 'secret_sauce')
        await loginPage.loginCheck()
        await loginPage.checkUrl()
    })
    it('Login with empty username and password', async () => {
        await browser.url('https://www.saucedemo.com/')
        await loginPage.login('', '')
        await loginPage.errorMessageCheckForText('Epic sadface: Username is required')
        await loginPage.login('standard_user', '')
        await loginPage.errorMessageCheckForText('Epic sadface: Password is required')
        console.log('Empty credentials test completed')
    })
    it('Login with invalid username and password', async () => {
        await browser.url('https://www.saucedemo.com/')
        await loginPage.login('invalid_user', 'invalid_password')
        await loginPage.errorMessageCheckForText('Epic sadface: Username and password do not match any user in this service')
        console.log('Invalid credentials test completed')
    })

})
describe('Product page tests after login', function() {
    beforeEach(async () => {
        await browser.url('https://www.saucedemo.com/')
        await loginPage.login('standard_user', 'secret_sauce')
        await loginPage.checkUrl()
    })
    it('Check product title after login', async () => {
        const productTitle = await $('span[class="title"]')
        await expect(productTitle).toBeDisplayed()
        console.log('Product title is displayed after login')
    })
    it('Check inventory items after login', async () => { 
        await browser.url('https://www.saucedemo.com/')
        await loginPage.checkUrl()
        await invPage.checkInventoryItemsDisplayed()
        console.log('Inventory items are displayed after login')
    })
})