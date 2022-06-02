describe('Login Form', () => {
    it('Check if the page load correctly', () => {
        cy.visit('http://localhost:3000/')
        cy.contains('Sign in').click()

        cy.contains('Sign in')
        cy.url().should('include', '/login')
    })



    it('Check validity success', () => {
        cy.visit('http://localhost:3000/login')

        cy.get('#email')
            .type('roman.gascoin@gmail.com')
            .should('have.value', 'roman.gascoin@gmail.com')
        cy.get('#password')
            .type('cest mon text')
            .should('have.value', 'cest mon text')

        cy.contains('Login').click()
        cy.contains('Error')
    })
})