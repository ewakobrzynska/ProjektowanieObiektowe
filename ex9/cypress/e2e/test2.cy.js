describe('Check Title of Cypress Documentation Page', () => {
  it('Checks the title of the page', () => {
    cy.visit('https://docs.cypress.io')
    
    // Sprawdzanie, czy tytuł strony zawiera słowo "Cypress"
    cy.title().should('contain', 'Cypress')

    // Sprawdzanie, czy tytuł strony zawiera słowo "Documentation"
    cy.title().should('contain', 'Documentation')

    // Sprawdzanie, czy tytuł strony zawiera słowo "Cypress" lub "Documentation"
    cy.title().should('satisfy', title => {
      return title.includes('Cypress') || title.includes('Documentation')
    })

    // Sprawdzanie, czy tytuł strony ma określoną długość
    cy.title().should('have.length.above', 10)

    // Sprawdzanie, czy tytuł strony nie zawiera frazy "Error"
    cy.title().should('not.include', 'Error')
  })
})
