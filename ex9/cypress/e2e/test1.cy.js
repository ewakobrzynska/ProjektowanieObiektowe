describe('Visit Cypress Documentation', () => {
  it('Visits the Cypress documentation page', () => {
    cy.visit('https://docs.cypress.io')
    
    // Sprawdzanie, czy tytuł strony zawiera słowo "Cypress"
    cy.title().should('contain', 'Cypress')

    // Sprawdzanie, czy znajduje się sekcja "Getting Started"
    cy.contains('Getting Started')

    // Sprawdzanie, czy istnieje przycisk lub link prowadzący do strony z dokumentacją API
    cy.contains('API Documentation').should('have.attr', 'href', '/api/table-of-contents')

    // Sprawdzanie, czy istnieje przycisk lub link prowadzący do strony z przykładami
    cy.contains('Examples').should('have.attr', 'href', '/examples')

    // Sprawdzanie, czy stopka zawiera link do strony z polityką prywatności
    cy.get('footer').contains('Privacy Policy').should('have.attr', 'href', '/privacy')
  })
})
