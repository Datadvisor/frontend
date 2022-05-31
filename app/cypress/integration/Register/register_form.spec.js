describe('Register Form', () => {
  it('Check if the page load correctly', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Sign up').click()

    cy.contains('Sign up')
    cy.url().should('include', '/register')
  })



  it('Check validity sucess', () => {
    cy.visit('http://localhost:3000/register')

    cy.get('#firstName')
        .type('Roman')
        .should('have.value', 'Roman')
    cy.get('#lastName')
        .type('Gascoin')
        .should('have.value', 'Gascoin')
    cy.get('#email')
        .type('roman.gascoin@gmail.com')
        .should('have.value', 'roman.gascoin@gmail.com')
    cy.get('#password')
        .type('cest mon text')
        .should('have.value', 'cest mon text')
    cy.get('#passwordVerif')
        .type('cest mon text')
        .should('have.value', 'cest mon text')

    cy.contains('Create').click()
    cy.contains('Error')
  })
})