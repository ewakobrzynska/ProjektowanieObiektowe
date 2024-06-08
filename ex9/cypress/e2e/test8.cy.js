describe('Check Title of Example Cypress Page', () => {
  it('Checks the title of the page', () => {
    cy.visit('https://example.cypress.io')
    cy.title().should('include', 'Cypress')
  })
})
