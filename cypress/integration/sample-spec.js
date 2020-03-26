// describe and it come from Mocha
// expect comes from Chai

describe('My First Test', function() {
    it('Does not do much!', function() {
      expect(true).to.equal(true)
    })
  })



  describe('visit app', function() {
    it('Successfully loads', function() {
    cy.visit('localhost:3000')
    
    })
  })

  describe('find content', function() {
    it('finds the content', function() {
        //baseUrl config
        cy.visit('/')
        cy.contains('Vending-Machine Demo Application')
    })
  })

  describe('click a link', function() {
    it('click the sports link', function() {
        cy.visit('localhost:3000')
        cy.contains('Sports').click()
        // Should be on a new URL which includes '#sports'
        cy.url().should('include', '#sports')
    })
  })

  describe('click button', function() {
    it('finds the pay button', function() {
        cy.visit('localhost:3000')
        cy.contains('Pay').click()

    })
  })

  describe('enter userName', function() {
    it('type user name', function() {
        cy.visit('localhost:3000')
        cy.get('#userName')
      .type('hitachi')
      .should('have.value', 'hitachi')

    })
  })