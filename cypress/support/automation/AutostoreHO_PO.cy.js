class AutostoreHO_PO {

    accessHomePage() {
        cy.visit(Cypress.env("automation_homePage"))
    }
    clickOn_Books() {
        cy.get("a[href*='product/category&path=']").contains('Books').click()
    }
}

export default AutostoreHO_PO