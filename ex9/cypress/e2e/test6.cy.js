describe('Check for Plugins Link and Click', () => {
  it('Checks for the Plugins link and clicks it', () => {
    cy.visit('https://docs.cypress.io')

    // Sprawdź, czy link do sekcji "Plugins" jest widoczny i kliknij go
    cy.contains('Plugins').should('be.visible').click()

    // Sprawdź, czy aktualny URL zawiera '/plugins'
    cy.url().should('include', '/plugins')

    // Sprawdź, czy istnieje tytuł "Plugins"
    cy.contains('Plugins').should('exist').and('be.visible')

    // Sprawdź, czy tytuł strony zawiera słowo "Plugins"
    cy.title().should('contain', 'Plugins')

    // Sprawdź, czy przycisk "API" nadal istnieje
    cy.contains('API').should('be.visible')

    // Sprawdź, czy przycisk "Plugins" nie jest już dostępny
    cy.contains('Plugins').should('not.exist')
  })
})
