describe('Check for Focus API Section', () => {
    it('Checks for the Focus API section', () => {
      cy.visit('https://docs.cypress.io/api/commands/focus')
      cy.contains('Focus').should('be.visible')
    })
  })
  