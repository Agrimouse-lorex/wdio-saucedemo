export default class LoginPage {

    get usernameInput() {
        return $('#user-name')
    }
    get passwordInput() {
        return $('#password')
    }
    get loginButton() {
        return $('#login-button')
    }
    get pageTitle() {
        return $('span.title')
    }
    get errorMessage() {
        return $('[data-test="error"]')
    }

    async login(username, password) {
        await this.usernameInput.waitForExist({ timeout: 20000 })
        await this.usernameInput.setValue(username)
        await this.passwordInput.setValue(password)
        await this.loginButton.click()
    }
    async loginCheck() {
        await expect(this.pageTitle).toBeDisplayed()
        console.log('Login successful')
    }
    async errorMessageCheck() {
        await expect(this.errorMessage).toBeDisplayed()
        console.log('Login failed, error message displayed')
    }
    async errorMessageCheckForText(errorText) {
        await expect(this.errorMessage).toHaveText(errorText)
        console.log('Login failed, error message displayed')
    }
    async verifyPageIsOpen() {
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        await expect(this.pageTitle).toHaveText('Products')
        console.log('Inventory page is open')
    }
}