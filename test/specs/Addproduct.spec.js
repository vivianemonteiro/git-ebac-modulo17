const homeScreen = require("../screens/home.screen");
const loginScreen = require("../screens/login.screen");
const myStoreScreen = require("../screens/myStore.screen");
const AddProductScreen = require("../screens/addProduct.screen");

let url = 'http://lojaebac.ebaconline.art.br'
let usuario = 'gerente'
let senha = 'GD*peToHNJ1#c$sgk08EaYJQ'

let productTitle = 'New Product Title'
let productDescription = 'Testing to create a new product with webdriverIO'
let price = '35.00'
let sku = 'webdriverIOTesting'
let quantity = '100'

describe('Access Admin Panel', () => {
    it('should login with valid credentials', async ()  => {
        await homeScreen.goToLogin()
        await loginScreen.setStoreAddress(url)
        await loginScreen.continue()
        await loginScreen.login(usuario, senha)
        await loginScreen.goToTwoFactorAuth()
        await loginScreen.twoFactorLogin(senha)

        expect(await myStoreScreen.myStoreLogoIsDisplayed()).toBeTruthy()
        expect(await myStoreScreen.getStoreName()).toEqual('EBAC - Shop')
    });
})

describe('Add New Product'), () => {
    it('should add new product', async () => {
        await AddProductScreen.addNewProduct()
        await AddProductScreen.newProductDescription(productTitle, productDescription)
        await AddProductScreen.newProductPrice(price)
        await AddProductScreen.newProductInventory(sku, quantity)
        await AddProductScreen.newProductPublish()
    })

}