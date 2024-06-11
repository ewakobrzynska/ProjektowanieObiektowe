describe('Check for Examples Link and Click', () => {
  it('Checks for the Examples link and clicks it', () => {
    cy.visit('https://docs.cypress.io')

    // Sprawdź, czy link do sekcji "Examples" jest widoczny i kliknij go
    cy.contains('Examples').should('be.visible').click()

    // Sprawdź, czy aktualny URL zawiera '/examples'
    cy.url().should('include', '/examples')

    // Sprawdź, czy istnieje tytuł "Examples"
    cy.contains('Examples').should('exist').and('be.visible')

    // Sprawdź, czy tytuł strony zawiera słowo "Examples"
    cy.title().should('contain', 'Examples')

    // Sprawdź, czy przycisk "API" nadal istnieje
    cy.contains('API').should('be.visible')

    // Sprawdź, czy przycisk "Examples" nie jest już dostępny
    cy.contains('Examples').should('not.exist')
  })
})
