describe('Check for Wrap API Section', () => {
    it('Checks for the Wrap API section', () => {
      cy.visit('https://docs.cypress.io/api/commands/wrap')
      cy.contains('Wrap').should('be.visible')
    })
  })
  