export default class InventoryPage{

    get productTitle(){
        return $('span[class="title"]')
    }
    get inventoryItems(){
        return $$('div[class="inventory_item"]')
    }  
    get sortContainer(){
        return $('select[data-test="product_sort_container"]')
    }
    get inventoryItemNames(){
        return $$('div[class="inventory_item_name"]')
    }
    get inventoryItemPrices(){
        return $$('div[class="inventory_item_price"]')
    }  
    get inventoryDescriptions(){
        return $$('div[class="inventory_item_desc"]')
    }
    get inventoryAddToCartButton(){
        return $$('button[class="btn btn_primary btn_small btn_inventory"]')
    } 
    get inventoryItemImgs(){
        return $$('img[class="inventory_item_img"]')
    }   
    get addToCartButtons(){
        return $$('button[class="btn btn_primary btn_small btn_inventory "]')
    }
    get removeButtons(){
        return $$('button[class="btn btn_secondary btn_small btn_inventory "]')
    }
    get shoppingCartBadge(){
        return $('span[data-test="shopping-cart-badge"]')
    }
    get shoppingCartLink(){
        return $('a[class="shopping_cart_link"]')
    }
    get productSortContainer(){
        return $('select[data-test="product-sort-container"]')
    }
    get burgerMenuButton(){
        return $('button[id="react-burger-menu-btn"]')
    }
    get logoutLink(){
        return $('a[id="logout_sidebar_link"]')
    }

    async logout(){
        if (!(await this.logoutLink.isDisplayed({ withinViewport: true }))) {
            await this.burgerMenuButton.scrollIntoView();
            await this.burgerMenuButton.click()
        }
        await this.logoutLink.waitForClickable({timeout:5000})
        await this.logoutLink.click()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/')
    }
    async sortProductsBy(){
        console.log(await this.productSortContainer.getValue())
        await this.productSortContainer.selectByIndex(2)
    }
    async addAllProductsToCart(){
        for await (const btn of await this.addToCartButtons){
            await btn.click()
        }
    }
    async removeAllProductsFromCart(){
        for await (const btn of await this.removeButtons){
            await btn.click()
        }
    }
    async productItemVisible(){
        for await (const item of await this.inventoryItems){
            await expect(item).toBeDisplayed()
        }
    }
    async getInventoryItemNames(){
        const names = []
        for await (const nameElement of await this.inventoryItemNames){
            const nameText = await nameElement.getText()
            names.push(nameText)
        }
        console.log(names)
        return names
    }
    async getInventoryItemPrices(){
        const prices = []
        for await (const priceElement of await this.inventoryItemPrices){
            const priceText = await priceElement.getText()
            prices.push(priceText)
        }
        console.log(prices)
        return prices
    }
    async checkProductTitle(){
        await expect(this.productTitle).toBeDisplayed()
    }
    async checkInventoryItemsDisplayed(){
        for await (const img of await this.inventoryItems){
            console.log(await img.getAttribute('src'))
            await expect(img).toBeDisplayed()
        }
    }
    async logoutButtonVisible(){
        await this.burgerMenuButton.click()
        await this.logoutLink.waitForDisplayed({timeout:5000})
        await expect(this.logoutLink).toBeDisplayed()
    }
}

