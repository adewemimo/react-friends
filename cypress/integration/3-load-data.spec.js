describe ('load data - get new friends', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('find the input field', () => {
        cy.get('button#load-friends').click()
        cy.get('li')
            .should('have.length', 5);
            
    });
    
    
})