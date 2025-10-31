describe('Testing Login page', () => {

  beforeEach('The project Demo URL', () => {
    cy.visit('https://practicetestautomation.com/practice-test-login/')
  })

  it.only('TLT-1: Positive login test', () => {

    cy.get('[type="text"]').clear().type('student')
    cy.get('[name="password"]').clear().type('Password123')
    cy.get('[class="btn"]').click()
    cy.url().should('include', 'https://practicetestautomation.com/logged-in-successfully/')
    cy.get('[class="post-title"]').should('contain.text', 'Logged In Successfully', 'Congratulations student. You successfully logged in!')
    cy.get('a[href="https://practicetestautomation.com/practice-test-login/"]').should('have.text', 'Log out').and('be.visible').click()


  })
  it('TLT-2: Negative Username Login test', () => {

    cy.get('[type="text"]').type('kannan')
    cy.get('[name="password"]').type('Password123')
    cy.get('[class="btn"]').click()
    cy.get('[class="show"]').should('contain.text', 'Your username is invalid!').should('be.visible')


  })
  it('TLT-3: Negative Password Login test', () => {

    cy.get('[type="text"]').type('student')
    cy.get('[name="password"]').type('Password12')
    cy.get('[class="btn"]').click()
    cy.get('[class="show"]').should('contain.text', 'Your password is invalid!').should('be.visible')

  })
})