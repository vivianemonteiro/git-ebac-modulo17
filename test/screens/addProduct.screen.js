class AddProductScreen {
    get #ProductPage (){
        return $('id:com.woocommerce.android:id/navigation_bar_item_large_label_view')
    }

    get #AddProduct () {
        return $('id:com.woocommerce.android:id/addProductButton')
    }

    get #SimpleProductType (){
        return $('android = new UiSelector().text("Simple physical product")')
    }

    get #ProductTitle (){
        return $('com.woocommerce.android:id/editText')
    }

    get #ProductDescription (){
        return $('android = new UiSelector().text("Describe your product")')
    }

    get #ProductDescriptionText (){
        return $('id:com.woocommerce.android:id/visualEditor')
    }

    get #ReturnProductMainScreen (){
        return $('android.widget.ImageButton[@content-desc="Navigate up"]')
    }

    get #AddPrice (){
        return $('android = new UiSelector().text("Add price")')
    }

    get #RegularPrice (){
        return $('android = new UiSelector().text("Regular price")')
    }

    get #SalePrice (){
        return $('android = new UiSelector().text("Sale price")')
    }

    get #ScheduleSale (){
        return $('com.woocommerce.android:id/switchSetting_switch')
    }

    get #TaxStatus (){
        return $('com.woocommerce.android:id/product_tax_status')
    }

    get #TaxClass (){
        return $('com.woocommerce.android:id/product_tax_class')
    }

    get #Inventory (){
        return $('android = new UiSelector().text("Inventory")')
    }

    get #SKU (){
        return $('android = new UiSelector().text("SKU")')
    }

    get #ManageStock (){
        return $('com.woocommerce.android:id/manageStock_switch')
    }

    get #Quantity (){
        return $('com.woocommerce.android:id/edit_text')
    }

    get #Backorders (){
        return $('com.woocommerce.android:id/spinner_edit_text')
    }

    get #LimiOnePerOrder (){
        return $('com.woocommerce.android:id/soldIndividually_switch')
    }

    get #StockStatus (){
        return $('com.woocommerce.android:id/spinner_edit_text')
    }

    get #Categories (){
        return $('UiSelector().text("Categories")')
    }

    get #Publish (){
        return $('com.woocommerce.android:id/menu_publish')
    }

    async addNewProduct (){
        await this.#AddProduct.click()
        await this.#SimpleProductType.click()
    }

    async newProductDescription (){
        await this.#ProductTitle.setValue(title)
        await this.#ProductDescription.click()
        await this.#ProductDescriptionText.setValue(description)
        await this.#ReturnProductMainScreen.click()
    }

    async newProductPrice (){
        await this.#AddPrice.click()
        await this.#RegularPrice(price)
        await this.#ReturnProductMainScreen.click()
    }
    
    async newProductInventory (){
        await this.#Inventory.click()
        await this.#SKU.setValue(sku)
        await this.#ManageStock.click()
        await this.#Quantity.setValue(quantity)
        await this.#ReturnProductMainScreen.click()
    }

    async newProductPublish (){
        await this.#Publish.click()

    }
}

module.exports = new AddProductScreen();
