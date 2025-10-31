describe('Inspest the product', () => {
    it.only('Inspect the first product using text method', () => {
        cy.visit('https://automationteststore.com/')
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click()
    });
    it('Inspect the first product using index method', () => {
        cy.visit('https://automationteststore.com/')
        // cy.get('div[class="fixed_wrapper"]').find('a[class="prdocutname"]').eq(0).click()

        // ----------------------------------------------------------------
        cy.get('[class="col-md-3 col-sm-6 col-xs-12"]').eq(0).click()
        cy.screenshot('first product using index -', { scale: true })
    });
});