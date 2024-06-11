describe('Navigate to Guides and Verify URL', () => {
  it('Navigates to the Guides section and checks the URL', () => {
    cy.visit('https://docs.cypress.io')

    // Kliknij na sekcję "Guides"
    cy.contains('Guides').click()

    // Sprawdź, czy aktualny URL zawiera '/guides'
    cy.url().should('include', '/guides')

    // Sprawdź, czy istnieje tytuł "Guides"
    cy.contains('Guides').should('exist').and('be.visible')

    // Sprawdź, czy tytuł strony zawiera słowo "Guides"
    cy.title().should('contain', 'Guides')

    // Sprawdź, czy przycisk "API" nadal istnieje
    cy.contains('API').should('be.visible')

    // Sprawdź, czy przycisk "Guides" nie jest już dostępny
    cy.contains('Guides').should('not.exist')
  })
})
