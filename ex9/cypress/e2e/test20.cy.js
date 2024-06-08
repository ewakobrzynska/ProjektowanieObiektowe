describe('Check for Click API Section', () => {
    it('Checks for the Click API section', () => {
      cy.visit('https://docs.cypress.io/api/commands/click')
      cy.contains('Click').should('be.visible')
    })
  })
  