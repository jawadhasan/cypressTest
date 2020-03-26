describe('The Home Page', function () {
  
    it('tests navbar items', function() {

        //open base url
        cy.visit('/')

        //finds the text
        cy.contains('Vending-Machine Demo Application')

        //verify the links
        cy.contains('Sights').click()
        cy.screenshot('clicking-on-nav')

        cy.url().should('include', '#sights')

        cy.contains('Sports').click()
        cy.url().should('include', '#sports')

        cy.contains('Activities').click()
        cy.url().should('include', '#activities')

        cy.contains('Contact Us').click()
        cy.url().should('include', '#contact-us')

        //Enter UserName
        const username = 'Hitachi'
        cy.get('input[name=userName]').type(username).should('have.value', 'Hitachi')


        //....and so on...

    })
  })