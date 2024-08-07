describe('Navigation testing', () => {
    it('should navigate to pages and render web page', () => {
        cy.visit('/');
        cy.get('h1').should('contain', 'Home')
        cy.visit('/kalika');
        cy.get('h1').should('contain', 'About Kalika')
        cy.visit('/blog');
        cy.get('h1').should('contain', 'Blog')
        cy.visit('/about-me');
        cy.get('h1').should('contain', 'About Me')
        cy.visit('/contact');
        cy.get('h1').should('contain', 'Login')
        cy.get('form').should('exist')
        cy.visit('/login');
        cy.get('h1').should('contain', 'Login')
        cy.get('form').should('exist')
        cy.get('button[type="submit"]').should('exist')

    })
})