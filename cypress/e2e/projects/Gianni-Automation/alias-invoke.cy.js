describe('Alias and Invoke methodologies', () => {

    // folllowing urls : Alias ,invoke.
    it('Validate the specific product in the page', () => {
        cy.visit('https://automationteststore.com/')
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click()

        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail')
        cy.get('@productThumbnail').its('length').should('be.gt', 10)
        cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')
    });
    it('verify the number of product in the product page', () => {
        cy.visit('https://automationteststore.com/')
        cy.get('.thumbnail').as('productThumnail')
        cy.get('@productThumnail').should('have.length', 16)
        // validate the attribute - Add to cart.
        cy.get('@productThumnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')

    });
    it.only('Iterate all the sell price', () => {
        cy.visit('https://automationteststore.com/')
        cy.get('.thumbnail').as('productThumnail')
        cy.get('@productThumnail').find('.oneprice').each(($ele) => {
            cy.log($ele.text())
        })


    });
    it.only('calculate the Non sell price ', () => {
        cy.visit('https://automationteststore.com/')
        var Totalsum = 0

        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemprice')
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleprice')

        cy.get('@itemprice').then(($linktext) => {
            var price = $linktext.split('$')
            let sum = 0
            let i;
            for (i = 0; i < price.length; i++) {
                cy.log(price[i])
                sum += Number(price[i])
                // cy.log(`The Non sale price is : ${sum}`)It iterates continuously so 
                //Create onsole Out side the block.


            }
            Totalsum += sum
            cy.log(`Non sale price is ${sum}`)
        })

        // calculate selling price : 
        cy.get('@saleprice').then(($linktext) => {
            var pricesell = $linktext.split('$')
            let sumsell = 0
            let i;
            for (i = 0; i < pricesell.length; i++) {
                cy.log(pricesell[i])
                sumsell += Number(pricesell[i])
                // cy.log(`The Non sale price is : ${sum}`)It iterates continuously so 
                //Create onsole Out side the block.


            }
            Totalsum += sumsell
            cy.log(`Sale price is ${sumsell}`)
        }).then(() => {
            cy.log(`The overall product total price is ${Totalsum}`)
            expect(Totalsum).to.eq(673)
        })

    });
});