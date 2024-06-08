describe('Check for Invoke API Section', () => {
    it('Checks for the Invoke API section', () => {
      cy.visit('https://docs.cypress.io/api/commands/invoke')
      cy.contains('Invoke').should('be.visible')
    })
  })
  