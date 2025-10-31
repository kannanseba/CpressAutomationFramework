/// <reference types="cypress" />
describe('Testmouse actions', () => {
    it('Scroll element into view', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click()

    });
    it('Drag and drop functionality', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click()
        // drag the mouse // put centre
        cy.get('#draggable').trigger('mousedown', { which: 1 })
        // take out the mouse
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', { force: true })
    });
    it('How should i able to double click the mouse', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click()

        cy.get('#double-click').dblclick()
    });
    it.only('How should i able to double click and hold ', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click()
        // drag
        cy.get('#click-box').trigger('mousedown', { which: 1 }).should('have.css', 'background-color', 'rgb(0, 255, 0)')
            .trigger('mouseup') // take out the mouse.

    });

});


