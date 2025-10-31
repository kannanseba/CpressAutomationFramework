// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
Cypress.Commands.add('selectProduct', productName => {
    cy.get('.fixed_wrapper .prdocutname').each(($ele, index, list) => {
        if ($ele.text().includes(productName)) {
            cy.wrap($ele).click()
        }
    })
})
// 1.))
Cypress.Commands.add('contactUs_Submission', (firstname, lastname, email, message, assertiontxt, textVisible) => {
    cy.get('[name="first_name"]').type(firstname)
    cy.get('[name="last_name"]').type(lastname)
    cy.get('[name="email"]').type(email)
    cy.get('[name="message"]').type(message)
    cy.get('[class="contact_button"][type="submit"]').click()
    cy.contains('assertiontxt').should('be.visible')

})

// --------------------------------------------------------------------------
// Add Multible products into the basket (Add to cart)
Cypress.Commands.add('addMultibleProduct', productName => {
    cy.get('.fixed_wrapper .prdocutname').each(($ele, index, list) => {
        if ($ele.text() === productName) {
            cy.log($ele.text())
            cy.get(".productcart").eq(index).click()

        }

    })
})

// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })