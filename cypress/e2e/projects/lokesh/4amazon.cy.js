/// <reference types="cypress" />


describe('template spec', () => {
    it('TC - 01', () => {
        // Search Mobiles :

        cy.visit('https://www.amazon.in/')
        cy.get('[class="nav-search-field "] #twotabsearchtextbox').type('mobiles')
        cy.get('[type="submit"]').click({ force: true })
        cy.url().should('include', 'https://www.amazon.in/s?k=mob')
        // cy.get('#brandsRefinements [class="a-size-base a-color-base"]').each(($el) => {
        //     let selected = $el.text()
        //     if (selected.includes('Samsung')) {
        //         cy.wrap($el).click({ force: true })

        //     }
        // })

        // ------------------------------

        cy.get('#brandsRefinements [class="a-size-base a-color-base"]').each(($ele, index, list) => {
            cy.log(`Index > ${index} : ${$ele.text()}`)


        })
    })

    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
})









