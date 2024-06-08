describe('Check for Examples Link and Click', () => {
    it('Checks for the Examples link and clicks it', () => {
      cy.visit('https://docs.cypress.io')
      cy.contains('Examples').should('be.visible').click()
      cy.url().should('include', '/examples')
    })
  })
  