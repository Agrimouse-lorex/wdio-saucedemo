 describe('Product page tests after login', () => {
    it.skip("login test on mobile", async () => {
        await browser.url('https://www.saucedemo.com/')
        await $('#user-name').waitForExist({ timeout: 15000 });
        await $('#user-name').setValue('standard_user')
        await $('#password').setValue('secret_sauce')
        await $('#login-button').click() 
        const url = await browser.getUrl()
        console.log('Current URL after login: ', url)
        await expect(url).toBe('https://www.saucedemo.com/inventory.html')
        console.log('Inventory page is open, url verified: ', url)
    })
 })