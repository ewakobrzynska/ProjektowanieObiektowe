describe('Visit Cypress Documentation', () => {
    it('Visits the Cypress documentation page', () => {
      cy.visit('https://docs.cypress.io')
      cy.contains('Introduction')
    })
  })
  