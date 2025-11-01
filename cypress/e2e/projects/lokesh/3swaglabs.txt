

describe('Swaglabs project work ', () => {
    /*Test cases:
    1. Negative username test.
    2.Proper username and password & Assert the (successfully login) url.
    3.Set the price low to high in the dropdown.
    4.Add 3 product to the cart & click cart icon.
    5.Assert three product in the cart.
    6.Checkout the cart page and fill the information.
    7.Test added item total should match the given total from the site.
    
    */
    it('TC -01 : Negative username test', () => {
        cy.visit('https://www.saucedemo.com/v1/')
        cy.get('#user-name').clear().type('kannan')
        cy.get('#password').clear().type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('contain.text', 'Username and password do not match any user in this service')

    })
    it('TC -02 : Validate correct username and password', () => {
        cy.visit('https://www.saucedemo.com/v1/')
        cy.get('#user-name').clear().type('standard_user')
        cy.get('#password').clear().type('secret_sauce')
        cy.get('#login-button').click()
        cy.url().should('include', 'https://www.saucedemo.com/v1/inventory.html')

    })
    it('TC -03 : Set the price low to high in the dropdown.', () => {
        cy.visit('https://www.saucedemo.com/v1/inventory.html')
        // product added to the cart.
        cy.get('.product_sort_container').select('Price (low to high)')
        const wanted = [
            'Sauce Labs Backpack',
            'Sauce Labs Bike Light',
            'Sauce Labs Bolt T-Shirt'
        ]
        wanted.forEach(names => {
            cy.contains('.inventory_item', names)
                .find('.btn_inventory')
                .contains('ADD TO CART')
                .click()
        })
        // --------------------------------------------------------------------------
        // const item = [
        //     'Sauce Labs Backpack',
        //     'Sauce Labs Bike Light',
        //     'Sauce Labs Bolt T-Shirt'
        // ]

        // item.forEach((itemName)=>{
        //     cy.contains('.inventory_item_name', itemName)
        //     .find('class="btn_primary btn_inventory"').contains('ADD TO CART').click()

        // })
        // Cart page assertion:
        cy.get('[data-icon="shopping-cart"]').click()
        cy.get('.cart_item').contains('[class="inventory_item_name"]', 'Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T - Shirt').should('exist')
        cy.get('[class= "btn_action checkout_button"]').should('have.text', 'CHECKOUT').click()
        // S  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        // cy.get('.inventory_item').each(($ele) => {
        //     let ProdName = $ele.find('.inventory_item_desc').text()
        //     if (ProdName.includes('T-Shirt') || ProdName.includes('Backpack')) {
        //         cy.wrap($ele).contains('ADD TO CART').click()
        //     }

        //     })
        // it('TC -04 :Checkout the cart page and fill the information.', () => {
        //     cy.visit('https://www.saucedemo.com/v1/checkout-step-one.html')
        cy.url().should('include', 'https://www.saucedemo.com/v1/checkout-step-one.html')
        cy.get('#first-name').clear().type('kannan')
        cy.get('#last-name').type('sebastin')
        cy.get('#postal-code').type('627760')
        cy.get('[type="submit"]').should('contain', 'CONTINUE').and('be.visible').click()




        // L  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

        // })
        // it('TC -05 :Test added item total should match the given total from the site.', () => {
        // cy.visit('https://www.saucedemo.com/v1/checkout-step-two.html')
        cy.url().should('include', 'https://www.saucedemo.com/v1/checkout-step-two.html')

        // add all the price.
        let sum = 0
        cy.get('.inventory_item_price').each(($el) => {
            let siteP = $el.text()
            let pri = Number(siteP.slice(1))
            sum += pri
        })
        let priceonsite
        cy.get('.summary_subtotal_label').invoke('text').then((siteAmt) => {
            priceonsite = Number(siteAmt.split('$')[1].trim())

        }).then(() => {
            expect(sum).to.equal(priceonsite)
        })
        // cy.get('.inventory_item_price').then($els => {
        //     const sum = [...$els]
        //         .map(el => parseFloat(el.innerText.replace(/[^0-9.]/g, '')))
        //         .reduce((a, b) => a + b, 0);

        //     cy.get('.summary_subtotal_label').invoke('text').then(t => {
        //         const subtotal = parseFloat(t.replace(/[^0-9.]/g, ''));
        //         expect(+sum.toFixed(2)).to.eq(+subtotal.toFixed(2));
        //     });
        // });
    })
})
