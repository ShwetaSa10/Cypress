

describe('To verify login functionality',function(){
    it (' To check login functionality with valid credentials',function(){
        cy.visit('https://freshindiaorganics.com/')
        cy.get('input[placeholder="Email Address"]').type('kshirsagarshweta10@gmail.com',{force:true})
        cy.get('input[name="customer[password]"]').type('Bank#7070',{force:true})
        cy.get('input[class="btn btn-login"]').click({force:true})
    })
})