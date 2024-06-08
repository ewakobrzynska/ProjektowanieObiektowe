describe('Kitchen Sink Cypress.io End-to-End (E2E) testing', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io')
  })

  it('Querying: contains', () => {
    cy.contains('Kitchen Sink').should('be.visible')
  })

})
