describe('Interact with dropdown in webdriver', () => {
    it('Validate the drop down functionality', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()

        cy.get('#dropdowm-menu-1').select('c#').should('have.text', 'c#')
        cy.get('#dropdowm-menu-2').select('testng')
        cy.get('#dropdowm-menu-3').select('javascript')

    })
})