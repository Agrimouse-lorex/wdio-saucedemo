export default class LoginPage{

    get usernameInputElement(){
        return $('//input[@data-test="username"]')
    }
    get passwordInputElement(){
        return $('//input[@data-test="password"]')
    }
    get loginButtonElement(){
        return $('//input[@data-test="login-button"]')
    }
    get loginCheckElement(){
        return $('span[class="title"]')
    }
    get errorMessage(){
        return $('h3[data-test="error"]')
    }

    async login(username, password){
        await this.usernameInputElement.setValue(username)
        await this.passwordInputElement.setValue(password)
        await this.loginButtonElement.click()
    }
    async loginCheck() {
        await expect(this.loginCheckElement).toBeDisplayed()
        console.log('Login successful')
    }
    async errorMessageCheck(){
        await expect(this.errorMessage).toBeDisplayed()
        console.log('Login failed, error message displayed')
    }
    async errorMessageCheckForText(errorText){
        await expect(this.errorMessage).toHaveText(errorText)
        console.log('Login failed, error message displayed')
    }
    async checkUrl(){
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    }
}