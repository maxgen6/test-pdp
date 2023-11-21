describe('App E2E ', () => {
  it('should have input and button', () => {
    cy.visit('/')

    cy.get('input').should('have.value', '')
    cy.get('button').should('have.text', 'Create')
  });

  it('should add a task work correctly', () => {
    cy.visit('/')

    const testTitle = 'test'
    cy.get('input[type="text"]').type(testTitle).should('have.value', testTitle)
    cy.contains('Create').click()

    cy.get('li p').should('have.text', `Title: ${testTitle}`)
    cy.get('input[type="text"]').should('have.value', '')

    cy.get('input[type="text"]').type('test 2 todos').should('have.value', 'test 2 todos')
    cy.contains('Create').click()

    cy.get('li:last-child p').should('have.text', 'Title: test 2 todos')
    cy.get('input[type="text"]').should('have.value', '')
  });

  it('should delete task work correctly', () => {
    cy.visit('/')

    const testTitle = 'test'
    cy.get('input[type="text"]').type(testTitle).should('have.value', testTitle)
    cy.contains('Create').click()

    cy.get('li p').should('have.text', `Title: ${testTitle}`)
    cy.get('input[type="text"]').should('have.value', '')

    cy.get('input[type="text"]').type('test 2 todos').should('have.value', 'test 2 todos')
    cy.contains('Create').click()

    cy.get('li:last-child p').should('have.text', 'Title: test 2 todos')
    cy.get('input[type="text"]').should('have.value', '')

    /** new test */
    cy.get('li').should('have.length', 2);
    cy.get('li:last-child span:last-child').click();

    cy.get('li').should('have.length', 1);
  })

  it('should toggle status work correctly', () => {
    cy.visit('/')

    const testTitle = 'test'
    cy.get('input[type="text"]').type(testTitle).should('have.value', testTitle)
    cy.contains('Create').click()

    cy.get('li p').should('have.text', `Title: ${testTitle}`)
    cy.get('input[type="text"]').should('have.value', '')

    cy.get('input[type="text"]').type('test 2 todos').should('have.value', 'test 2 todos')
    cy.contains('Create').click()

    cy.get('li:last-child p').should('have.text', 'Title: test 2 todos')
    cy.get('input[type="text"]').should('have.value', '')

    /** new test */
    cy.get('li:first-child input').should('not.have.checked').click().should('have.checked')
  });
})