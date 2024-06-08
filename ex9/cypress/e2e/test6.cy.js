describe('Check for Plugins Link and Click', () => {
    it('Checks for the Plugins link and clicks it', () => {
      cy.visit('https://docs.cypress.io')
      cy.contains('Plugins').should('be.visible').click()
      cy.url().should('include', '/plugins')
    })
  })
  