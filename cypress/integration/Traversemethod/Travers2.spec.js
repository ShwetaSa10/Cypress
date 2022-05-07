

describe('traverse method check',function(){
it('To get the next sibling DOM element within elements, use the .next() command.',function(){
cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
cy.get('#coffee').next().should('have.text','Tea')
})

it('To get the previous sibling DOM element within elements, use the .prev() command.',function(){
    cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    cy.get('#tea').prev().should('have.text','Coffee')
})

it('To get all of the next sibling DOM elements within elements, use the .nextAll() command.',function(){
    cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    cy.get('#tea').nextAll().should('have.length',3)
})

it.only('To get all previous sibling DOM elements within elements, use the .prevAll() command.',function(){
    cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    cy.get('#sugar').prevAll().should('have.length',4)
})

it.only('To check previous until()',function(){
    cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    cy.get('#sugar').prevUntil('#tea').should('have.length',2)
})
})
