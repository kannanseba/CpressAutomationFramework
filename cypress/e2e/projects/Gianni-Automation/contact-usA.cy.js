/// <reference types="cypress" />

describe('Test the contact us form in the Automation centre', () => {
    before(function () {
        // another method to use fixture
        cy.fixture('userDetails').as("user")
        // we can test by viewport with the different devices height and width.
        // cy.viewport(1366, 768)
    });



    beforeEach(() => {
        cy.visit('https://automationteststore.com/')
    });

    it('Fill and submit the form successfully', () => {

        cy.get('[href="https://automationteststore.com/index.php?rt=content/contact"]').click()
        cy.get('@user').then((user) => {
            cy.get('[name="first_name"]').type(user.first_name)
            cy.get('[id="field_12"]').type(user.field_12)
            cy.get('[id="field_13"]').type(user.field_13)
        })

        cy.screenshot('sst - 1', { scale: true })
        cy.get('[title="Submit"]').click()

    });
});