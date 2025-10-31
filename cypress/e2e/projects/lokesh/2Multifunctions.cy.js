describe('Rahul shetty practice page', () => {
  beforeEach('General url page', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
  })
  it('Test case - TSC-01 "Radio button checking"', () => {

    //select the first radio button and assert it once and all other buttons are should not be select.
    // cy.get('[value="radio1"].radioButton').check().should('be.checked')
    // cy.get('[value="radio2"].radioButton').should('not.be.checked')
    // cy.get('[value="radio3"].radioButton').should('not.be.checked')

    // -------------------------------------------------------------------------------
    cy.get('[value="radio1"].radioButton').check().should('be.checked')
    cy.get('[value="radio2"].radioButton').should('not.be.checked')
    cy.get('[value="radio3"].radioButton').should('not.be.checked')

  })
  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  it('Test case - TSC-02 "Dynamic drop down to select specified country"', () => {
    //
    // cy.get('[id="autocomplete"]').type('In')
    // cy.get('ul li [class="ui-menu-item-wrapper"]').each(($country) => {
    //   if ($country.text() === "India") {
    //     cy.wrap($country).click({ force: true })
    //   }
    // })
    // ------------------------------------------------------------------------
    cy.get('[id="autocomplete"]').type('in')
    cy.get('ul li [class="ui-menu-item-wrapper"]').each(($coun) => {
      if ($coun.text() === 'India') {
        cy.wrap($coun).click({ force: true })
      }
    })
  })
  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  it('Test case - TSC-03 "Static drop down to select specified options"', () => {
    cy.get('[id="dropdown-class-example"]').select('Option1').should('have.value', 'option1')
    cy.get('[id="dropdown-class-example"]').select('Option2').should('have.value', 'option2')
    cy.get('[id="dropdown-class-example"]').select('Option3').should('have.value', 'option3')
    // select ( used to selecting the options) in an array,or using index,


  })
  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  it('Test case - TSC-04 "Switch tab "', () => {
    cy.get('[id="opentab"]').contains('Open Tab').should('be.visible')
    cy.get('[class="btn-style class1 class2"]').invoke('removeAttr', "target").click()
    cy.url().should('include', "https://www.qaclickacademy.com/")
    // cy.contains('Siri Balaji Residency, 2 GaddiAnnaram, Hyderabad').should('be.visible')
    cy.origin('https://www.qaclickacademy.com/', () => {

      cy.contains('info@qaclickacademy.com').should('be.visible')
      // cy.get('[class="category-text pt-40"]').contains('Best platform to learn Software and Automation Testing').should('be.visible')
      cy.go(-1)
    })

    //----------------------------------------------------------------------------------


  })
  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.
  it.only('Test case - TSC-05 "Verifying the check box functyionality"', () => {

    const group = () =>
      cy.contains('legend', 'Checkbox Example').parent('fieldset')
    // Assert the no of checkbox and iterate no check box has selected and enabled.

    group().find('input[type="checkbox"]').should('have.length', 3).each(($ele) => {
      cy.wrap($ele).should('not.be.checked').and('be.enabled')
    })
    const byId = (n) => cy.get(`#checkBoxOption${n}`)
    byId(1).check().should('be.checked');
    byId(2).should('not.be.checked');
    byId(3).should('not.be.checked');

    byId(1).uncheck().should('not.be.checked')
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // only check option 2 remaining should be in uncheck position.
    byId(2).check().should('be.checked');
    byId(1).check().should('be.checked');
    byId(3).should('not.be.checked');
    // byId(3).check().should('be.checked')
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    //  keyboard – Space toggles a focused checkbox.
    byId(3).should('not.be.checked')

      .focus().should('be.focused')       // explicit focus
      .type(' ')                    // literal space to tab the space bar in ther laptop.
      .should('be.checked');
  })

  it('Test case - TSC-06 "Verifying the {web table} functyionality"', () => {
    cy.get('[class="table-display"]').should('be.visible')
    //=>  Header row text and count.
    cy.get('table#product tbody tr').first().within(() => {
      cy.get('th').eq(0).should('have.text', 'Instructor')
      cy.get('th').eq(1).should('have.text', 'Course')
      cy.get('th').eq(2).should('have.text', 'Price')
    })

    // verigying the web table functionality header.
    // within - Temporarily scopes all child queries to a specific parent element.

    cy.get('table.table-display tbody tr').first().within(() => {
      cy.get('th').eq(0).should('have.text', 'Instructor')
      cy.get('th').eq(0).should('have.text', 'Course')
      cy.get('th').eq(0).should('have.text', 'Price')



    })
    // commands :
    // .first() = narrows the subject to the first row (your header row).
    // .within(()=>{})    = everything inside now searches inside that header row only.

    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // // To find out the word "TESTNG" which includes in the table :

    // cy.get('.left-align table tr td:nth-child(2)').each(($cells) => {
    //   if ($cells.text().includes('TestNG')){
    //     cy.wrap($cells).next().then((priceofCourse)=>{
    //       const pricef = priceofCourse.text()
    //       expect (Number(pricef).to.eq(20))
    //     })
    //   }
    // ----------------------------------------------------------------
    // cy.get('.left-align table tr td:nth-child(2)').each(($tada)=>{

    //   if ($tada.text().includes('TestNG')){
    //     cy.wrap($tada).next().then(($pricecou)=>{
    //       const price = $pricecou.find('td:nth-child(3)').text()
    //       expect(price).eq().should('have.text','20')
    //     })
    //   }
    // })


    //   // })
    // })
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    cy.get('.left-align table tr').each(($cells) => {
      let course = $cells.find('td:nth-child(2)').text()
      if (course.includes('Selenium')) {
        let price = $cells.find('td:nth-child(3)').text()
        cy.log(`This ${course} price will be : ${price} `)
        // cy.log("This " + course + " price will be : "+ price  )
      }
    })
    // --------------------------------------------------------------------
    // cy.get('.left-align table tr').each(($cellsa) => {

    //   const coursa = $cellsa.find('td:nth-child(2)').text()
    //   if (coursa.includes('TesNG')) {
    //     let prica = $cellsa.find('td:nth-child(3)').text()
    //     cy.log(`the course ${coursa} fees is ${prica}`)
    //   }
    // })



  })
  it('Test case - TSC-07 "Verifying the Right {web table} Fixed header', () => {
    // get the person and his place in next row and validate the amount if correct or wrong.
    cy.get('.right-align table tr ').each(($table) => {
      let Name = $table.find('td:nth-child(1)').text()
      if (Name.includes('Ronaldo')) {

        let place = $table.find('td:nth-child(3)').text()
        let amount = $table.find('td:nth-child(4)').text()
        cy.log(`${Name} from  ${place} and the travel amount is ${amount}`)
      }
    })
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // Assert the "total amount collected" should be equal to the table total.
    let sum = 0

    cy.get('.right-align table tr td:nth-child(4)').each(($amt) => {
      let addamt = Number($amt.text())
      sum += addamt
      // then - Gets the resolved subject from the previous Cypress command and lets you run normal JS with it.
      // Need the actual value(text, number, array) or want to do conditional logic.
    }).then(function () {
      cy.log(sum)
      let stamt = 0
      // cy.get('.right-align .totalAmount').invoke('text').should('contain','296')
      cy.get('.right-align .totalAmount').invoke('text').then((siteAmount) => {
        // Total Amount Collected: 296 
        stamt = Number(siteAmount.split(':')[1].trim())
        if (sum === stamt) {
          cy.log(`our total ${sum} matches site total ${stamt}`)
        } else {
          cy.log(`Not equal`)
        }

      }).then(() => {
        expect(sum).to.equal(stamt)

      })
    })
    //----------------------------------------------------------------------------
    // let sumb = 0
    // cy.get('.right-align table tr td:nth-child(4)').each(($amtt) => {
    //   const tot = Number($amtt.text())
    //   sum += tot

    // }).then(() => {
    //   cy.log(sumb)
    //   let sumAmt = 0


    //   cy.get('.right-align .totalAmount').invoke('text').then(($tableAmt) => {
    //     const sitAmt = Number($tableAmt.text().split(';')(1).trim())
    //     sumAmt += sitAmt
    //     if (sum === sitAmt) {
    //       cy.log(`The Table amt ${sum} is equal to ${sitAmt}`)
    //     } else {
    //       cy.log('Not equal')
    //     }

    //   }).then(() => {
    //     expect(sum).to.eq(sitAmt)
    //   })
    // })

  })

  it('Test case - TSC-08 "Validate the hide and show button', () => {
    cy.get('[id="displayed-text"]').type('kannan').should('exist').and('be.visible') // chaining assertion.
    cy.get('[id="show-textbox"]').click()
    cy.get('[id="displayed-text"]').should('be.visible') // important is that shown or not.
    cy.get('[id="hide-textbox"]').click()
    cy.get('[id="displayed-text"]').should('not.be.visible')
  })
  it('Test case - TSC-09 "Validate the alert functionality"', () => {
    cy.get('[id="name"]').clear().type('kannan')
    cy.get('[id="alertbtn"]').click()
    cy.on('window:alert', (text) => {
      expect(text).to.contain(`Hello kannan, share this practice page and share your knowledge`)
    })

    // ----------------------------------------------------------------------
    cy.on('window:alert', (text) => {
      expect(text).to.contain('Hello kannan, share this practice page and share your knowledge')
    })
  })
  it('Test case - TSC-10 "Validate the Mousehover functionality"', () => {
    cy.get('[id="mousehover"]').should('be.visible')
    cy.get('[class="mouse-hover-content"]').invoke('show')
    cy.get('.mouse-hover-content').should('be.visible')
    cy.get('[href="#top"]').click({ force: true })


    cy.get('[href="#top"]').click({ force: true })
  })

})
