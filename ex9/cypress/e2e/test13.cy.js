describe('Check for Fixtures API Section', () => {
    it('Checks for the Fixtures API section', () => {
      cy.visit('https://docs.cypress.io/api/commands/fixture')
      cy.contains('Fixtures').should('be.visible')
    })
  })
  