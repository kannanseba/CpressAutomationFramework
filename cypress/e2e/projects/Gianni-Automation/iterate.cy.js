describe('Iterate over the products', () => {
    beforeEach(() => {
        cy.visit('https://automationteststore.com/')
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click()
    });

    it('Iterating the list existing product in the page', () => {


        cy.get('.fixed_wrapper .prdocutname').each(($ele, index, list) => {
            cy.log(`Index > ${index} : ${$ele.text()}`)
        })



    });

    it('Select the specified product in the product page', () => {

        // cy.get('.fixed_wrapper .prdocutname').each(($ele, index, list) => {
        //     if ($ele.text().includes('Pantene Pro-V Conditioner')) {
        //         cy.wrap($ele).click()
        //     }
        // })
        cy.selectProduct('Pantene Pro-V Conditioner')
    });

    it.only('Select  another specified product in the product page', () => {
        // using custom commands.

        cy.selectProduct('Eau Parfumee au The Vert Shampoo')
    });
});