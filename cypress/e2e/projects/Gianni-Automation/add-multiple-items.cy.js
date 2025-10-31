import AutostoreHO_PO from "../../../support/automation/AutostoreHO_PO.cy";
import Autostore_Books_PO from "../../../support/automation/Autostore_Books_PO.cy"
describe('Iterate over the multiple products to select multiple product', () => {
    const autoStore = new AutostoreHO_PO()
    const autoStore_Books_PO = new Autostore_Books_PO()
    before(function () {

        cy.fixture("products").then((data) => {
            globalThis.data = data
        })
    });



    beforeEach(() => {

        // cy.visit('https://automationteststore.com/')
        // cy.get("a[href*='product/category&path=']").contains('Books').click()


        autoStore.accessHomePage()
        autoStore.clickOn_Books()


        //----------------------------------


    });


    it('Select Multiple product to the add to cart page', () => {
        autoStore_Books_PO.autoStore_Books_AddtoBasket()
        // globalThis.data.productName.forEach((element) => {

        //     cy.addMultibleProduct(element)

        // })
        // cy.get('.dropdown-toggle .fa').click()
    });
})