


describe('To validate login functionality',function(){
    it('to validate login functionality with valid credentials',function(){
     cy.visit('https://opensource-demo.orangehrmlive.com/')
     cy.get('input[id="txtUsername"]').type('Admin')
     cy.get('input[id="txtPassword"]').type('Admin123')
     cy.get('input[id="btnLogin"]').click()
     

    })
})