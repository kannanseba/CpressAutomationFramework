/// <reference types="cypress" />
describe('Verify Autocomplete dropdown functionality', () => {
    it('Select specific product via drop down lis', () => {
        cy.visit('/')
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click()

        cy.get('#myInput').type('A')
        cy.get('#myInputautocomplete-list >*').each(($ele) => {
            const prod = $ele.text()
            const prodName = "Almond"
            if (prod === prodName) {
                cy.wrap($ele).click()
                cy.get('#submit-button').click()
                cy.url().should('include', 'Almond')
            }
        }).then(() => {
            cy.get('#myInput').type('g')
            cy.get('#myInputautocomplete-list >*').each(($ele) => {
                const prod = $ele.text()
                const prodName = "Grapes"
                if (prod === prodName) {
                    cy.wrap($ele).click()
                    cy.get('#submit-button').click()
                    cy.url().should('include', 'Grapes')
                }



            })
        });

    })


});


