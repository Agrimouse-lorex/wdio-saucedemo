describe('Demo Tests', function() {
    it('My first test', async () => {
        await browser.url('https://google.com')
        await $('textarea[jsname="yZiJbe"]').setValue('WebdriverIO')
        // await $('input[name="btnK"]').click()
        await browser.keys('Enter')
        await browser.pause(5000)  // Reduced to 5 seconds for testing
    })
})