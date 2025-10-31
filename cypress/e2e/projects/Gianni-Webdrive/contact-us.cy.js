import HomePage_PO from "../../../support/PageObjects/WebDriverUni/HomePage_PO.cy";
import contactUs_PO from "../../../support/PageObjects/WebDriverUni/contactUs_PO.cy";


describe('Testing contact us form', () => {

    beforeEach(function () {

        // Page object model concept :
        const homePage_PO = new HomePage_PO()
        homePage_PO.visitHomePage()
        homePage_PO.clickOn_contactUs_Button()
        // cy.visit(Cypress.env("webDriver_homePage") + "Contact-Us/contactus.html")
        // cy.visit('/')
        // cy.get('#contact-us').invoke('removeAttr', 'target').click()


    });
    before(function () {
        cy.fixture('example').then(function (data) {
            globalThis.data = data

        })


    });
    it('Fill and submit the form succcessfully', () => {

        //--------------------------------------------------------------------
        // To validate the entire document datas.
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        // To check the title of the website page
        // cy.title().should('include', 'WebDriver | Contact Us')
        // cy.url().should('include', '/Contact-Us/contactus.html')
        //Using fixture to filled the form.

        // cy.get('[name="first_name"]').type(data.first_name)
        // cy.get('[name="last_name"]').type(data.last_name)
        // cy.get('[name="email"]').type(data.email)
        // cy.get('[name="message"]').type(data.message)
        // cy.get('[class="contact_button"][type="submit"]').click()
        // cy.contains('Thank You for your Message!').should('be.visible')

        // 1.create a custom commands in the command file and copy the existing fixtures from contactus paste into the commands.
        // 2.Then come to the contact us page create name for each selector using existing fixtures.

        // what happens is : Custom Commands:
        // >> create custom command for fixture to the commands "contactus submission" with name of the each>>
        // >> Then only we can call very simply by the single name in contact us page.
        // 2))


        // cy.contactUs_Submission(data.first_name, data.last_name, data.email, data.message, 'Thank You for your Message!', 'be.visible')
        // cy.log("Test has successfully completed")

        const page = new contactUs_PO()
        page.Contactform_Submission(Cypress.env(data.first_name, data.last_name, data.email, data.message, 'Thank You for your Message!', 'be.visible'))

    });

    it.skip('Fill the form without email to verify the assertion of the error page Result', () => {

        // cy.get('[name="first_name"]').type(data.first_name)
        // cy.get('[name="last_name"]').type(data.last_name)

        // cy.get('[name="message"]').type(data.message)
        // cy.get('[class="contact_button"][type="submit"]').click()
        // cy.contains('Error: all fields are required').should('be.visible')

        // cy.contactUs_Submission(data.first_name, data.last_name, " ", data.message, 'Error: all fields are required', 'be.visible')
        // cy.log("Test has successfully completed")



    });


});


