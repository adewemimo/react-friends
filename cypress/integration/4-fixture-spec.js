describe ('Get fixtures instead', () => {
    beforeEach(() => {
        cy.visit('/')
        .intercept("GET", "**/random_name*", {fixture: "names.json"})
        .as("namesResponse");
    })
    it('get fixture at button click', () => {
        cy.get('button#load-friends').click();

        cy.wait("@namesResponse");
            
    });
    
    
})