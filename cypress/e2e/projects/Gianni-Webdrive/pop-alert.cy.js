/// <reference types="cypress" />

describe('Handle js alerts', () => {
    it('Confirm js alert contains the correct text', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'Popup-Alerts')

        cy.get('#button1').click()
        cy.on('window:alert', (str) => {                // we have to assert the pop up using this events
            expect(str).to.equal('I am an alert box!')
        })
    })
    it('Validate the confirm box alert working correctly clicking ok', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'Popup-Alerts')

        cy.get('#button4').click()
        cy.on('window:confirm', (str) => {                // we have to assert the pop up using this events
            return true;
        })
        cy.get('#confirm-alert-text').should('have.text', 'You pressed OK!')

    })

    it('Validate the confirm box alert working correctly clicking Cancel', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'Popup-Alerts')

        cy.get('#button4').click()
        cy.on('window:confirm', (str) => {                // we have to assert the pop up using this events
            return false;
        })
        cy.get('#confirm-alert-text').should('have.text', 'You pressed Cancel!')
    })

    it('Validate the confirm alert box using a stub', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'Popup-Alerts')

        const stub = cy.stub()
        cy.on('window:confirm', stub)
        cy.get('#button4').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }).then(() => {
            return true;
        }).then(() => {
            cy.get('#confirm-alert-text').should('have.text', 'You pressed OK!')

        })
    })
});


