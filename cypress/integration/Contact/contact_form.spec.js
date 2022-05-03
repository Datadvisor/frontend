describe('Contact Form', () => {
  it('Check if the page load correctly', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Autre').click()
    cy.get('a[href*="contact"]').click()

    cy.contains('Contactez Datadvisor')
    cy.url().should('include', '/contact')
  })

  it('Check All errors', () => {
    cy.visit('http://localhost:3000/contact')
    cy.contains('Envoyer').click()

    cy.contains('Le prénom ne peux être vide')
    cy.contains('Le nom ne peux être vide')
    cy.contains('Le mail ne peux être vide')
    cy.contains('Le contenu ne peux être vide')
  })

  it('Check first name error', () => {
    cy.visit('http://localhost:3000/contact')

    cy.get('#first-name')
        .type('Roman')
        .should('have.value', 'Roman')

    cy.contains('Envoyer').click()

    cy.contains('Le nom ne peux être vide')
    cy.contains('Le mail ne peux être vide')
    cy.contains('Le contenu ne peux être vide')
  })

  it('Check last name error', () => {
    cy.visit('http://localhost:3000/contact')

    cy.get('#last-name')
        .type('Gascoin')
        .should('have.value', 'Gascoin')

    cy.contains('Envoyer').click()

    cy.contains('Le prénom ne peux être vide')
    cy.contains('Le mail ne peux être vide')
    cy.contains('Le contenu ne peux être vide')
  })

  it('Check email error', () => {
    cy.visit('http://localhost:3000/contact')

    cy.get('#email')
        .type('roman.gascoin@gmail.com')
        .should('have.value', 'roman.gascoin@gmail.com')

    cy.contains('Envoyer').click()

    cy.contains('Le prénom ne peux être vide')
    cy.contains('Le nom ne peux être vide')
    cy.contains('Le contenu ne peux être vide')
  })

  it('Check contenu error', () => {
    cy.visit('http://localhost:3000/contact')

    cy.get('#how-can-we-help')
        .type('cest mon text')
        .should('have.value', 'cest mon text')

    cy.contains('Envoyer').click()

    cy.contains('Le prénom ne peux être vide')
    cy.contains('Le nom ne peux être vide')
    cy.contains('Le mail ne peux être vide')
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

    cy.contains('Envoyer').click()

    cy.contains('Votre mail est parti avec succés')
  })
})