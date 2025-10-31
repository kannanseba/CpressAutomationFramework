describe('Handling datpicker ', () => {
    beforeEach('', () => {
        cy.visit('/')
        cy.get('#datepicker').invoke('removeAttr', 'target').click()
        cy.get('#datepicker').click()

    })
    it('Select date from the date picker', () => {

        // let date1 = new Date()
        // date1.setDate(date1.getDate())
        // cy.log(date1.getDate());

        // let date2 = new Date()
        // date2.setDate(date2.getDate() + 1)
        // cy.log(date2.getDate())


        /// here the synatx and used to select specified date and future month and year.

        var date = new Date()
        date.setDate(date.getDate() + 3) // selecting future day.

        var futureYear = date.getFullYear()
        var futureMonth = date.toLocaleString('default', { month: 'long' })
        var futureDay = date.getDate()

        cy.log("future year to select" + futureYear)
        cy.log("future Month to select" + futureMonth)
        cy.log("future Day to select" + futureDay)

        // here the date picker is automatically change into the future year using this method


        function selectMonthAndYear() {
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                if (!currentDate.text().includes(futureYear)) {
                    cy.get('.next').first().click()
                    selectMonthAndYear();
                }
            }).then(() => {
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                    if (!currentDate.text().includes(futureMonth)) {
                        cy.get('.next').first().click()
                        selectMonthAndYear();
                    }
                })

            })

        }
        function selectFutureDay() {
            cy.get('[class="day"]').contains(futureDay).click()
        }
        selectMonthAndYear();
        selectFutureDay()
    })
})