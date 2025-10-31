/// <reference types="cypress" />
describe('Handling i-frame and modules', () => {
    it('Using web driver uni iframe and modal', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#iframe').invoke('removeAttr', 'target').click()

        cy.get('#frame').then($iframe => {
            const body = $iframe.contents().find('body')
            cy.wrap(body).as('iframe')
        })
        cy.get('@iframe').find('#button-find-out-more').click()

        cy.get('@iframe').find('#myModal').as('modal')
        cy.get('@modal').should($havetext => {
            const text = $havetext.text()
            expect(text).to.include('Welcome to webdriveruniversity.com we sell a wide range of electrical goods ')
        })
        cy.get('@modal').contains('Close').click()

    });
});


