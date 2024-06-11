describe('Check for Plugins Section', () => {
  it('Checks for the Plugins section on the main page', () => {
    cy.visit('https://docs.cypress.io')

    // Sprawdź, czy tytuł strony zawiera słowo "Plugins"
    cy.title().should('contain', 'Plugins')

    // Sprawdź, czy nagłówek strony zawiera słowo "Plugins"
    cy.contains('Plugins').should('be.visible')

    // Sprawdź, czy istnieje sekcja z opisem "What are plugins?"
    cy.contains('What are plugins?').should('be.visible')

    // Sprawdź, czy istnieje nagłówek "How to use plugins in tests"
    cy.contains('How to use plugins in tests').should('be.visible')

    // Sprawdź, czy istnieje nagłówek "Plugin examples"
    cy.contains('Plugin examples').should('be.visible')
  })
})
