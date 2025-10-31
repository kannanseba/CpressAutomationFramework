// contact-us.cy.js - Testing contact us form👍

// contact-usA.cy.js - Test the contact us form in the Automation centre👍

// inspect-pro.cy.js - Inspect the first product using text method
//  Inspect the first product using index method.👍

// variable.cy.js -
// Navigate to the specific product page.👍
//verify the header presence inside the makeup page👍
// Validate the properties of contact us page👍

// iterate.cy.js - Iterating the list existing product in the page👍
//Select the specified product in the product page.👍

// alias-invoke.cy.js - Validates the specific product in the page.
//verify the number of product in the product page









describe('Practice page', () => {
    it('Navigate to the specific product page', () => {
        cy.visit('https://automationteststore.com/')
        cy.get("a[href*='category&path=']").contains('Makeup').click()

        // verify the header presence inside the makeup page
        cy.url().should('include', 'https://automationteststore.com/index.php?rt=product/category&path=36')
        cy.get('h1 .maintext').should('have.text', 'Makeup')

        // using jquery method and variable :
        cy.get('h1 .maintext').then(($headertxt) => {
            const header = $headertxt.text()
            cy.log(`The existing header name is : ${header}`)
            expect(header).is.eq('Makeup')
        })
        // validate the properties of contact us page :
        cy.get("a[href*='rt=content/contact']").click()
        cy.url().should('include', 'https://automationteststore.com/index.php?rt=content/contact')
        cy.get('h1 .maintext').then(($coheatxt) => {
            const contheader = $coheatxt.text()
            expect(contheader).is.eq(' Contact Us')
            cy.log(`The header of contact page = ${contheader}`)

            // properties : 

            cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
                const firstName = text.find('#field_11').text()
                expect(firstName).to.contain('First name')
                // cy.log(`present in ${firstName}`)
                const secondName = text.find('#field_12').text()
                expect(secondName).to.contain('Email:')
                const thirdName = text.find('#field_13').text()
                expect(thirdName).to.contain('Enquiry:')
            })
        })
    });
    it.only('Iterate the list in the existing product ', () => {
        cy.visit('https://automationteststore.com/')
        cy.get("a[href*='category&path=']").contains('Makeup').click()

        cy.get('.fixed_wrapper').each(($ele, index, list) => {
            cy.log(`index : ${index} existing in this ${$ele.text()}`)
        })

        // select specified product in the product page :
        cy.get('.fixed_wrapper .prdocutname').each(($ele, index, list) => {
            if ($ele.text().includes('Viva Glam Lipstick')) {
                cy.wrap($ele).click()
            }
        })


    });


});
