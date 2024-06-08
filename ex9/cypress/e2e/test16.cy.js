describe('Check for Pause API Section', () => {
    it('Checks for the Pause API section', () => {
      cy.visit('https://docs.cypress.io/api/commands/pause')
      cy.contains('Pause').should('be.visible')
    })
  })
  