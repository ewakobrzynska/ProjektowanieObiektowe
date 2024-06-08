describe('Check for Clear API Section', () => {
    it('Checks for the Clear API section', () => {
      cy.visit('https://docs.cypress.io/api/commands/clear')
      cy.contains('Clear').should('be.visible')
    })
  })
  