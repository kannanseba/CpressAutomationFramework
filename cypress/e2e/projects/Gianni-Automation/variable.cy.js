describe('Verifying variables,cypress commands and jquery', () => {
    it('Navigate to the specific product page', () => {
        cy.visit('https://automationteststore.com/')
        // 1st concept :

        // const makeUp = cy.get("a[href*='product/category&path=']").contains('Makeup')
        // const skinCare = cy.get("a[href*='product/category&path=']").contains('Skincare')
        // makeUp.click()
        // skinCare.click()

        // 2 nd concept : Recommanded approach.
        cy.get("a[href*='product/category&path=']").contains('Makeup').click()
        cy.get("a[href*='product/category&path=']").contains('Skincare').click()
    });// After clicking the page asserting the header using this concept.
    it('verify the header presence inside the makeup page', () => {
        cy.visit('https://automationteststore.com/')

        // Normal assertion : concept 1 :
        cy.get("a[href*='product/category&path=']").contains('Makeup').click()
        cy.get('h1 .maintext').should('have.text', 'Makeup')

        // Recomended Approach : concept 2: 


        // cy.get('h1 .maintext').then(($headerSel) => {
        //     const header = $headerSel.text()
        //     cy.log(`The header is ${header}`)
        //     expect(header).is.eq('Makeup')
        // })

        // ------------------------------------------------------
        // separate header print:
        cy.get('h1 .maintext').then(($header) => {
            const exhead = $header.text()
            cy.log(`${exhead} is exists in the naviated product page`)
            expect(exhead).to.eq('Makeup')
        })
    });
    it.only('Validate the properties of contact us page', () => {
        cy.visit('https://automationteststore.com/')
        cy.get("a[href*='rt=content/contact']").click()
        cy.url().should('include', 'https://automationteststore.com/index.php?rt=content/contact')

        // Uses cypress command nd chaining

        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11', 'First name:').should('be.visible')

        // Jquery Approach :
        // using contains particular function package 
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {

            const firstName = text.find('#field_11').text()
            expect(firstName).to.contain('First name')
            // cy.log(`present in ${firstName}`)
            const secondName = text.find('#field_12').text()
            expect(secondName).to.contain('Email:')
            const thirdName = text.find('#field_13').text()
            expect(thirdName).to.contain('Enquiry:')
        })
        // ----------------------------------------------------------

        cy.contains('#ContactUsFrm', 'Contact Us Form').then(texter => {
            const first = texter.find('#field_11').text()
            expect(first).to.contain('First name')

        })
        // Embedded commands (closure):
        // cy.get('#field_11').then(fntxt => {
        //     cy.log(fntxt.text())
        // //     cy.log(fntxt)
        // })

    })



});
