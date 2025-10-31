

describe('Verify Radio button ', () => {


    before(function () {
        //cy.log(" runs once before all tests in the block*")
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()

    })
    it('Check specified radio button', () => {


        cy.get('#radio-buttons').find('[type="radio"]').first().check().should('be.enabled')

        cy.get('#radio-buttons').find('[type="radio"]').eq(1).check()
        // cy.get('#radio-buttons').find('[type="radio"]').eq(2).should('not.be.checked')
        cy.get('#radio-buttons').find('[type="radio"]').eq(3).check()
        cy.get('#radio-buttons').find('[type="radio"]').eq(4).check()


    })


    it('Check specified radio button', () => {
        cy.get('[value="lettuce"]').check().should('be.checked')
        cy.get('[value="lettuce"]').check().should('be.checked')
        cy.get('[value="cabbage"]').should('be.disabled')


    })

});


