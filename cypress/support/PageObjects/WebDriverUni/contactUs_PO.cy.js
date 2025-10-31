class contactUs_PO {

    // you can use custom commands either page object model to execute the test.

    Contactform_Submission(firstname, lastname, email, message, assertiontxt, textVisible) {
        cy.get('[name="first_name"]').type(data.first_name)
        cy.get('[name="last_name"]').type(data.last_name)
        cy.get('[name="email"]').type(data.email)
        cy.get('[name="message"]').type(data.message)
        cy.get('[class="contact_button"][type="submit"]').click()
        cy.contains('Thank You for your Message!').should('be.visible')

    }
}

export default contactUs_PO