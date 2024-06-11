describe('Search for Getting Started', () => {
  it('Searches for "getting started"', () => {
    cy.visit('https://docs.cypress.io')

    // Sprawdź, czy przycisk "API" jest widoczny
    cy.contains('API').should('be.visible')

    // Sprawdź, czy pole wyszukiwania istnieje i jest widoczne
    cy.get('input[placeholder="Search docs"]', { timeout: 10000 }).should('exist').and('be.visible').type('getting started{enter}')

    // Sprawdź, czy strona zawiera sekcję "Getting Started" po wykonaniu wyszukiwania
    cy.contains('Getting Started')
      .should('exist')
      .and('be.visible')
      .and('have.attr', 'href', '/guides/getting-started/introduction')
  })
})
