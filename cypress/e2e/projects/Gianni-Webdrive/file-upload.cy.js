describe('Checkbox validation', () => {
    it('Upload the file ', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#file-upload').invoke('removeAttr', 'target').click()
        cy.get('#myFile').selectFile('cypress/fixtures/pexels-eberhardgross-443446.jpg')
        cy.get('#submit-button').click()
    })

    it('No Upload the file ', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#file-upload').invoke('removeAttr', 'target').click()
        cy.on('window:alert', (text) => {
            expect(text).to.eq('You need to select a file to upload!');
        });
        cy.get('#submit-button').click()


    })
})