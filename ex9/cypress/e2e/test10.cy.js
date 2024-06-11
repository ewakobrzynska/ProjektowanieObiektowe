describe('Kitchen Sink Cypress.io End-to-End (E2E) testing', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io')
  })

  it('Actions: click', () => {
    // Kliknij na element "Commands"
    cy.contains('Commands').click()

    // Kliknij na element "Querying"
    cy.contains('Querying').click()

    // Sprawdź, czy aktualny URL zawiera '/commands'
    cy.url().should('include', '/commands')

    // Sprawdź, czy istnieje tytuł strony zawierający słowo "Commands"
    cy.title().should('contain', 'Commands')

    // Sprawdź, czy istnieje nagłówek "Commands" na stronie
    cy.get('h2').should('contain', 'Commands')
  })
})
