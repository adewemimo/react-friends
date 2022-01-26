describe('Form Tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('.input-form input').as('inputField');
  });
  it('can visit input field alias and enter text', () => {
    const text = 'Seun Soetan';
    cy.get('@inputField').type(text).should('have.value', text);
  });

  it('can click the button', () => {
    const text = 'Seun Soetan';
    cy.get('@inputField').type(text).should('have.value', text);

    cy.get('.input-form button').click();
  });

  it('can click the button and add to list', () => {
    const text = 'Seun Soetan';
    cy.get('@inputField').type(text).should('have.value', text);

    cy.get('.input-form button').click();

    cy.get('ul').should('contain', text);
  });

  it('can click the button and add item to the end of the list', () => {
    const text = 'Seun Soetan';
    cy.get('@inputField').type(text).should('have.value', text);

    cy.get('.input-form button').click();

    cy.get('ul').should('contain', text);

    cy.get('@inputField')
      .type('Betty White')
      .should('have.value', 'Betty White');

    cy.get('.input-form button').click();

    cy.get('li')
        .should('have.length', 2)
        .last()
        .should('contain', 'Betty White');


  });

  it.only('can click the button and add item to the end of the list and remove first item when is clicked', () => {
    const text = 'Seun Soetan';
    cy.get('@inputField').type(text).should('have.value', text);

    cy.get('.input-form button').click();

    cy.get('ul').should('contain', text);

    cy.get('@inputField')
      .type('Betty White')
      .should('have.value', 'Betty White');

    cy.get('.input-form button').click();

    cy.get('li')
        .should('have.length', 2)
        .last()
        .should('contain', 'Betty White');

        cy.get('li')
        .should('have.length', 2)
        .first()
        .should('contain', text)


        cy.get('li')
        .first()
        .click();

        cy.get('li')
        .should('have.length', 1)
        .first()
        .should('contain', 'Betty White');
        

  });
});
