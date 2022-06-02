describe('Contact Form', () => {
  it('Check if the page load correctly', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Other').click()
    cy.get('a[href*="contact"]').click()

    cy.contains('Contact Datadvisor')
    cy.url().should('include', '/contact')
  })

  it('Check All errors', () => {
    cy.visit('http://localhost:3000/contact')
    cy.contains('Send').click()

    cy.contains('Content can not be empty')
    cy.contains('Content can not be empty')
    cy.contains('Content can not be empty')
    cy.contains('Content can not be empty')
  })

  it('Check first name error', () => {
    cy.visit('http://localhost:3000/contact')

    cy.get('#first-name')
        .type('Roman')
        .should('have.value', 'Roman')

    cy.contains('Send').click()

    cy.contains('Content can not be empty')
    cy.contains('Content can not be empty')
    cy.contains('Content can not be empty')
  })

  it('Check last name error', () => {
    cy.visit('http://localhost:3000/contact')

    cy.get('#last-name')
        .type('Gascoin')
        .should('have.value', 'Gascoin')

    cy.contains('Send').click()

    cy.contains('Content can not be empty')
    cy.contains('Content can not be empty')
    cy.contains('Content can not be empty')
  })

  it('Check email error', () => {
    cy.visit('http://localhost:3000/contact')

    cy.get('#email')
        .type('roman.gascoin@gmail.com')
        .should('have.value', 'roman.gascoin@gmail.com')

    cy.contains('Send').click()

    cy.contains('Content can not be empty')
    cy.contains('Content can not be empty')
    cy.contains('Content can not be empty')
  })

  it('Check contenu error', () => {
    cy.visit('http://localhost:3000/contact')

    cy.get('#how-can-we-help')
        .type('cest mon text')
        .should('have.value', 'cest mon text')

    cy.contains('Send').click()

    cy.contains('Content can not be empty')
    cy.contains('Content can not be empty')
    cy.contains('Content can not be empty')
  })

  it('Check validity sucess', () => {
    cy.visit('http://localhost:3000/contact')

    cy.get('#first-name')
        .type('Roman')
        .should('have.value', 'Roman')
    cy.get('#last-name')
        .type('Gascoin')
        .should('have.value', 'Gascoin')
    cy.get('#email')
        .type('roman.gascoin@gmail.com')
        .should('have.value', 'roman.gascoin@gmail.com')
    cy.get('#how-can-we-help')
        .type('cest mon text')
        .should('have.value', 'cest mon text')

    cy.contains('Send').click()

    cy.contains('success')
  })
})