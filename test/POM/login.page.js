class LoginPage{

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

    async login(username, password){
        await this.usernameInputElement.setValue(username)
        await this.passwordInputElement.setValue(password)
        await this.loginButtonElement.click()
        await this.loginCheckElement.waitForExist()
        console.log('Login successful')
    }
}

export default new LoginPage();