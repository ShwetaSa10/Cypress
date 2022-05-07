const { it } = require("mocha")


describe('To validate  traverse method in cypress' , function(){
    it('To varify the contact us form', function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type('shweta')
        cy.get('input[name="last_name"]').type('kshirsagar')
        cy.get('input[name="email"]').type('shweta10@gmail.com')
        cy.get('textarea[name="message"]').type('learning cypress')
        cy.get('input[type="submit"]').click()
        cy.contains('Thank You for your Message!').should('be.visible')

    })

    
    it.only('verify the Contact us form with manadatory field',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('h2[name="contactme"]').should('be.visible')
        cy.get('input[name="first_name"]').type('shweta')
        cy.get('input[name="last_name"]').type('pawar')
        cy.get('textarea[name="message"]').type('I am new to Javascript')
        cy.get('input[value="SUBMIT"]').click()
        cy.contains('Error: all').should('be.visible')

    })

          it('To Verify the reset button functionality',function(){
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('h2[name="contactme"]').should('be.visible')
    
            cy.get('input[name="first_name"]').type('shweta')
            cy.get('input[name="last_name"]').type('kshirsagar')
            cy.get('input[name="email"]').type('shweta@gmail.com')
            cy.get('textarea[name="message"]').type('Learning')
            cy.get('input[value="RESET"]').click()
            cy.get('input[name="first_name"]').should('have.text','')
            cy.get('input[name="last_name"]').should('have.text','')
            cy.get('input[name="email"]').should('have.text','')
            cy.get('textarea[name="message"]').should('have.text','')
    
    
              
          })
})