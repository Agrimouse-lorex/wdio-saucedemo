import loginPage from "../POM/login.page"

describe('SauceDemo login test', function() {
    it('Login as standart user', async () => {
        await browser.url('https://www.saucedemo.com/')
        await loginPage.login('standard_user', 'secret_sauce')
    })
})