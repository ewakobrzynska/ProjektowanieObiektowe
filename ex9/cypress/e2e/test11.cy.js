describe('Check for Plugins Section', () => {
    it('Checks for the Plugins section on the main page', () => {
      cy.visit('https://docs.cypress.io')
      cy.contains('Plugins').should('be.visible')
    })
  })
  