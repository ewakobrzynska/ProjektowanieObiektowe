describe('Check for Intercept API Section', () => {
  it('Checks for the Intercept API section', () => {
    cy.visit('https://docs.cypress.io/api/commands/intercept')

    // Sprawdź, czy tytuł strony zawiera słowo "Intercept"
    cy.title().should('contain', 'Intercept')

    // Sprawdź, czy nagłówek strony zawiera słowo "Intercept"
    cy.contains('Intercept').should('be.visible')

    // Sprawdź, czy istnieje sekcja z opisem "What is intercept?"
    cy.contains('What is intercept?').should('be.visible')

    // Sprawdź, czy istnieje nagłówek "How to use intercept in tests"
    cy.contains('How to use intercept in tests').should('be.visible')

    // Sprawdź, czy istnieje nagłówek "Using aliases with cy.intercept"
    cy.contains('Using aliases with cy.intercept').should('be.visible')
  })
})
