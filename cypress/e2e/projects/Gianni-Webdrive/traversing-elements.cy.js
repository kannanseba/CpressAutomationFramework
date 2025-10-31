
describe("Traversing DOM elements in Cypress", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  })
  it("children() to get the children of DOM elements", () => {
    cy.get('ol[class="breadcrumb traversal-breadcrumb"]').children('[class="breadcrumb-item active"]').should('contain', 'Contact Us')
  });

  it("closest() to validate the closest ancestor DOM element", () => {
    // Unsing closest ancestor to get the selector.// used to close elements.

    cy.get('.traversal-badge').closest('ul').should('have.class', 'list-group')
    cy.get('ul.list-group')
      .children('li.list-group-item.badge-text')
      .eq(1)
      .should('contain', 'All Products')
    cy.get('ul.list-group')
      .children('li.list-group-item.badge-text')
      .eq(1)
      .find('span.badge.traversal-badge')
      .should('have.text', '20')
  });

  it("eq() to retrieve a specific element based on index", () => {
    cy.get('ul.traversal-drinks-list >*').eq(0).should('contain', 'Coffee')
  });

  it("filter() to retrieve DOM elements that match a specific selector / Buttons", () => {
    cy.get('.btn-group-toggle >*').filter('.active').should('contain', 'Button-1')
    cy.get('.btn-group-toggle [class="btn btn-primary"]').eq(0).should('contain', 'Button-2')
  });

  it("find() to retrieve DOM elements of a given selector / pagination", () => {
    cy.get('ul.traversal-pagination').find('li').find('a').should('have.length', 7)
  });

  it("first() to retrieve the first DOM element within elements / table header or data etc ", () => {
    cy.get('.traversal-table > tbody > tr td').first().should('contain', 'Andy')
  });

  it("last() to retrieve the last DOM element within elements", () => {
    cy.get('.traversal-table > tbody > tr td').last().should('contain', 'Scott')
  });

  it("nextAll() to get all of the next sibling DOM elements within elements", () => {
    cy.get('.traversal-drinks-list').contains('Tea').nextAll().should('have.length', 3)

  });

  it("nextUntil() to get all of the next sibling DOM elements within elements until another element", () => {
    cy.get('#coffee').nextUntil('#Espresso')
  });

  it("not() to remove DOM element(s) from the set of elements", () => {
    cy.get('.traversal-button-states >*').not('.disabled').should('not.have.class', 'disabled')
  });

  it("parent() To get parent DOM element of elements", () => {
    cy.get('.traversal-mark').parent().should('contain', 'Lorem ipsum dolor sit amet')
  });

  it("parents() to get parents DOM element of elements", () => {
    cy.get('.traversal-cite').parents().should('match', 'blockquote')
  });

  it("prev() to get the previous sibling DOM element within elements", () => {
    cy.get('#sugar').prev().contains('Espresso')
  });

  it("prevAll() to get all previous sibling DOM elements within elements", () => {
    cy.get('.sales').prevAll().should('have.length', 2)
  });

  it("prevUntil() to get all previous sibling DOM elements within elements until other element", () => {
    cy.get('#veggie').prevUntil('#Apple')
  });

  it("siblings() To get all sibling DOM elements of elements", () => {
    cy.get('.traversal-button-other-states .active').siblings().should('have.length', 3)
  });
});
