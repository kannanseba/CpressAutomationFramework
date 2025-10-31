import 'cypress-iframe'
describe('Iframe Plugin  Project', () => {
  
    it('Validating i frame', () => {
        cy.visit('https://demo.automationtesting.in/Frames.html')

        cy.frameLoaded('[id="singleframe"]'); // frame will be loaded
        cy.iframe('[id="singleframe"]')    // frame locator = These are all the basic methods to follow to apply the i frame.
            // cy.get('[class="btn.btn-theme.btn-sm.btn-min-block"]')
            cy.get('[class="row"] [class="col-xs-6 col-xs-offset-5"] [type="text"]').type('kannan')

    })



})