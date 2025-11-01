
describe('Checkbox validation', () => {

    beforeEach(function () {

        // -----------------------------------------------------------------
        // Dynamic url using env in commands and base url
        // cy.visit('/' + 'Dropdown-Checkboxes-RadioButtons/index.html')
        cy.visit(Cypress.env("webDriver_homePage") + "Dropdown-Checkboxes-RadioButtons/index.html")
        // cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
    });
    it('Verify the check boxes ', () => {

        // cy.get('#checkboxes [value="option-1"]').check().should('be.checked')

        cy.get('#checkboxes [value="option-1"]').as('option 1')
        cy.get('#checkboxes [value="option-2"]').as('option 2')
        cy.get('#checkboxes [value="option-3"]').as('option 3')

        cy.get('@option 1').check().should('be.checked')

        cy.get('@option 2').uncheck().should('not.be.checked')
        cy.get('@option 3').uncheck().should('not.be.checked')
    });
    it('// Selecting Multible check boxes : using values.', () => {

        cy.get('input[type="checkbox"]').check(["option-1", "option-2", "option-3", "option-4"]).should("be.checked")
    });







});


