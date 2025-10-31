class Autostore_Books_PO {

    autoStore_Books_AddtoBasket() {
        globalThis.data.productName.forEach((element) => {

            cy.addMultibleProduct(element)

        })
        cy.get('.dropdown-toggle .fa').click()
    }


}

export default Autostore_Books_PO