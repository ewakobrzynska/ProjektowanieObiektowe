describe('Check Title of Cypress Documentation Page', () => {
    it('Checks the title of the page', () => {
      cy.visit('https://docs.cypress.io')
      cy.title().should('include', 'Cypress Documentation')
    })
  })
  