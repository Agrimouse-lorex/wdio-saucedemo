 describe('Product page tests after login', () => {
    it("login test on mobile", async () => {
        await browser.url('https://www.saucedemo.com/')
        await $('#user-name').waitForExist({ timeout: 15000 });
        await $('#user-name').setValue('standard_user')
        await $('#password').setValue('secret_sauce')
        await $('#login-button').click()
        const pageTitle = await $('.title').getText()
        expect(pageTitle).toBe('Products'
        )
    })
 })