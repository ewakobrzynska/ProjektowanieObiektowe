describe('Check for API Link and Click', () => {
    it('Checks for the API link and clicks it', () => {
      cy.visit('https://docs.cypress.io')
      cy.contains('API').should('be.visible').click()
      cy.url().should('include', '/api')
    })
  })
  