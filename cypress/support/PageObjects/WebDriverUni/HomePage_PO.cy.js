class HomePage_PO {
    visitHomePage() {
        cy.visit(Cypress.env("webDriver_homePage"))
    }
    clickOn_contactUs_Button() {
        cy.get('#contact-us').invoke('removeAttr', 'target').click()
    }
}

export default HomePage_PO