describe('Check for Blur API Section', () => {
    it('Checks for the Blur API section', () => {
      cy.visit('https://docs.cypress.io/api/commands/blur')
      cy.contains('Blur').should('be.visible')
    })
  })
  