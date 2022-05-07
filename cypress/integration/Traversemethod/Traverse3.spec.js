


describe('To validate the traverse methods',function(){
    it('To remove DOM element(s) from the set of elements, use the .not() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states').children().not('disabled').should('have.length',3)
    })
    it('To check  .parent() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.contains('Danger').parent().should('have.class','traversal-button-states')

    })
    it('To check  .parents() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').parents().should('have.class','thumbnail').should('be.visible')
    })

   
    it.only('To check .parentsUntil() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').parentsUntil('.col-sm-12').should('have.length',2)
    })
})