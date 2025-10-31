/// <reference types="cypress" />
describe('Handling data from aan table ', () => {
    beforeEach('', () => {
        cy.visit('/')
        cy.get('#data-table').invoke('removeAttr', 'target').click()
    })
    it('Calculate and asser the total age of users ', () => {

        let val = []
        let sum = 0;
        cy.get('#thumbnail-1 td').each(($ele, index, $list) => {
            val[index] = $ele.text()
        }).then(() => {


            let i;
            for (i = 1; i < val.length; i++) {
                if (Number(val[i])) {
                    // cy.log(Number(val[i]))
                    sum += Number(val[i])
                }
            }
            cy.log(sum)
            expect(sum).to.eq(322)
        })


    });
    it.only('Assert the age is present in given user based on their last name', () => {

        cy.get('#thumbnail-1 td:nth-child(2)').each(($ele, index, $list) => {
            const text = $ele.text()
            if (text.includes('Woods')) {
                cy.get('#thumbnail-1 td:nth-child(2)').eq(index).next().then((age) => {
                    const ava = age.text()
                    expect(ava).to.eq('80')
                })

            }

        })

    });



});


