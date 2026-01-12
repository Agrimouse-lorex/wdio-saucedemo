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


    async checkInventoryItemsDisplayed(){
        for await (const img of await this.inventoryItems){
            console.log(await img.getAttribute('src'))
            await expect(img).toBeDisplayed()
        }
    }
}