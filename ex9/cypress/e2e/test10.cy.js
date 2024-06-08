describe('Kitchen Sink Cypress.io End-to-End (E2E) testing', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io')
  })

  it('Actions: click', () => {
    cy.contains('Commands').click()
    cy.contains('Querying').click()
    cy.url().should('include', '/commands')
  })

   
})
