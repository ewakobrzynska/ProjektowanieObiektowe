describe('Kitchen Sink Cypress.io End-to-End (E2E) testing', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io')
  })

  it('Querying: contains', () => {
    // Sprawdź, czy element "Kitchen Sink" jest widoczny
    cy.contains('Kitchen Sink').should('be.visible')

    // Sprawdź, czy istnieje przycisk "Getting Started"
    cy.contains('Getting Started').should('exist')

    // Sprawdź, czy istnieje pole wejściowe z etykietą "Name"
    cy.contains('Name').should('exist')

    // Sprawdź, czy istnieje link "More info about kitchen sink"
    cy.contains('More info about kitchen sink').should('exist')

    // Sprawdź, czy istnieje element "h1" z tekstem "Kitchen Sink"
    cy.get('h1').should('contain', 'Kitchen Sink')
  })
})
