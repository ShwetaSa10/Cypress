


describe('Travserse method in cyrpess',function(){
    it('To check .first() command',function(){
        cy.visit('https://automationteststore.com/')
        cy.get('ul[class="nav-pills categorymenu"]').children().first().should('have.contain','Home')
    })

it('To check .last() command',function(){
    cy.visit('https://automationteststore.com/')
    cy.get('ul[class="nav-pills categorymenu"]').children().last().should('have.contain','Books')
})

it('To check .child() commanf in cyrpess',function(){
    cy.visit('https://automationteststore.com/')
    cy.get('ul[class="nav-pills categorymenu"]').children().should('have.length',8)
})
it('To check .eq() command ', function(){
    cy.visit('https://automationteststore.com/')
    cy.get('ul[class="nav-pills categorymenu"]').children().eq(3).should('have.contain','Skincare')
})

it.only('To check filter command',function(){
    cy.visit('https://automationteststore.com/')
    cy.get('ul[class="nav-pills categorymenu"]').children().find('a').filter('.active.menu_home').should('contain','Home')
})
// it.only('To check .find() command',function(){
//     cy.visit('https://automationteststore.com/')
//     cy.get('.categorymenu').children().find('a').should('have.length',8)
// })
})

