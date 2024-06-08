describe('Search for Getting Started', () => {
    it('Searches for "getting started"', () => {
      cy.visit('https://docs.cypress.io')

      cy.contains('API').should('be.visible')
      cy.get('input[placeholder="Search docs"]', { timeout: 10000 }).should('exist').and('be.visible').type('getting started{enter}')
      cy.contains('Getting Started')
    })
  })
  