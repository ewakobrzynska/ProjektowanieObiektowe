describe('Check for Intercept API Section', () => {
    it('Checks for the Intercept API section', () => {
      cy.visit('https://docs.cypress.io/api/commands/intercept')
      cy.contains('Intercept').should('be.visible')
    })
  })
  