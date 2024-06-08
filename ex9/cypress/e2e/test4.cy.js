describe('Navigate to Guides and Verify URL', () => {
    it('Navigates to the Guides section and checks the URL', () => {
      cy.visit('https://docs.cypress.io')
      cy.contains('Guides').click()
      cy.url().should('include', '/guides')
    })
  })
  