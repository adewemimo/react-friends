describe ('Input Field Tests', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('.input-form input')
            .as('inputField');

    })
    it('find the input field', () => {
        cy.visit('http://localhost:3000')
        cy.get('.input-form input')
            
    });
    it('can enter text in the input field', () => {
        const text = "Seun Soetan"
        cy.get('.input-form input')
            .type(text)
            .should('have.value', text)
            
    });

    it('can visit input field alias and enter text', () => {
        const text = "Seun Soetan"
        cy.get('@inputField')
            .type(text)
            .should('have.value', text)
            
    });
})