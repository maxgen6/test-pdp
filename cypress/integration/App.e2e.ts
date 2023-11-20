describe('App E2E ', () => {
  it('should have input and button', () => {
    cy.visit('/')

    cy.get('input').should('have.value', '')
    cy.get('button').should('have.text', 'create')
  });

  it('should add a task', () => {
    const testTitle = 'test'
    cy.get('input[type="text"]').type(testTitle).should('have.value', testTitle)
    cy.contains('create').click()

    cy.get('li').should('have.text', testTitle)
    cy.get('input[type="text"]').should('have.value', '')
  });
})