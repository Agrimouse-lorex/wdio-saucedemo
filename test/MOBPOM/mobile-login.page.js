export default class LoginPage {

    get usernameInput() {
        return $('//input[@data-test="username"]')
    }
    get passwordInput() {
        return $('//input[@data-test="password"]')
    }
    get loginButton() {
        return $('//input[@data-test="login-button"]')
    }
    get pageTitle() {
        return $('//span[@data-test="title" and contains(text(),"Products")]')
    }
    get errorMessage() {
        return $('h3[data-test="error"]')
    }

    async login(username, password) {
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
    }
}