describe('Check for API Link and Click', () => {
  it('Checks for the API link and clicks it', () => {
    cy.visit('https://docs.cypress.io')

    // Sprawdź, czy link do sekcji API jest widoczny i kliknij go
    cy.contains('API').should('be.visible').click()

    // Sprawdź, czy aktualny URL zawiera '/api'
    cy.url().should('include', '/api')

    // Sprawdź, czy istnieje tytuł "API"
    cy.contains('API').should('exist').and('be.visible')

    // Sprawdź, czy tytuł strony zawiera słowo "API"
    cy.title().should('contain', 'API')

    // Sprawdź, czy przycisk "Guides" nadal istnieje
    cy.contains('Guides').should('be.visible')

    // Sprawdź, czy przycisk "API" nie jest już dostępny
    cy.contains('API').should('not.exist')
  })
})
