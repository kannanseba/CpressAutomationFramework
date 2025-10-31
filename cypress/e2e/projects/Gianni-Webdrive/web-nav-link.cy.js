/// <reference types="cypress" />

describe('Web driver navigation link practice', () => {
    it('Confirm web link redirect into the correct pages', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'contactus')
        cy.go('back') // 
        cy.reload()  // without using cache.
        cy.url().should('include', 'https://webdriveruniversity.com/')
        cy.go('forward')
        cy.url().should('include', 'contactus')
        cy.go('back')
        cy.get('#login-portal').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'https://webdriveruniversity.com/Login-Portal/index.html')
        cy.go('back')
        cy.reload()
    });




});


