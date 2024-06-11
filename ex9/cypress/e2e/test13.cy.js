describe('Check for Fixtures API Section', () => {
  it('Checks for the Fixtures API section', () => {
    cy.visit('https://docs.cypress.io/api/commands/fixture')

    // Sprawdź, czy tytuł strony zawiera słowo "Fixtures"
    cy.title().should('contain', 'Fixtures')

    // Sprawdź, czy nagłówek strony zawiera słowo "Fixtures"
    cy.contains('Fixtures').should('be.visible')

    // Sprawdź, czy istnieje sekcja z opisem "What are fixtures?"
    cy.contains('What are fixtures?').should('be.visible')

    // Sprawdź, czy istnieje nagłówek "How to use fixtures in tests"
    cy.contains('How to use fixtures in tests').should('be.visible')

    // Sprawdź, czy istnieje nagłówek "Loading a fixture in a test"
    cy.contains('Loading a fixture in a test').should('be.visible')
  })
})
