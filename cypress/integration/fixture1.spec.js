describe('verify the contact form',function(){

    // object 


    let userinfo = {
        firstName:"shweta",
        lastName:"kshirsagar",
        email:"shweta@gmail.com",
        comment:"hello i am learning javascript and cypress"
    }

    // json 

    let userinfo2 = {
        "firstName":"shweta1",
        "lastName":"kshirsagar1",
        "email":"shweta10@gmail.com",
        "comment":"hello i am learning javascript and SQL"
    }




    // object 
    // retrive --  userinfo.firstName userinfo['firstName']
    // userinfo.firstName = "tanmay"
    // userinfo.lang = "hindi"
    // delete userinfo.comment


    it('verify the contact us form 0',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('h2[name="contactme"]').should('be.visible')
        //selecting the element by text
        //<h2 name="contactme" class="section_header">CONTACT US</h2>
        cy.contains('CONTACT US').should('be.visible')
        // Testing the contact us form
        cy.get('input[name="first_name"]').type('shweta')
        cy.get('input[name="last_name"]').type('kshirsagar')
        cy.get('input[name="email"]').type('shweta@gmail.com')
        cy.get('textarea[name="message"]').type('I am new to Javascript and cypress')
        cy.get('input[value="SUBMIT"]').click()
        cy.get('h1').should('have.text',"Thank You for your Message!")    
    })

    it('verify the contact us form 1',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('h2[name="contactme"]').should('be.visible')
        //selecting the element by text
        //<h2 name="contactme" class="section_header">CONTACT US</h2>
        cy.contains('CONTACT US').should('be.visible')
        // Testing the contact us form
        cy.get('input[name="first_name"]').type(userinfo.firstName)
        cy.get('input[name="last_name"]').type(userinfo.lastName)
        cy.get('input[name="email"]').type(userinfo.email)
        cy.get('textarea[name="message"]').type(userinfo.comment)
        cy.get('input[value="SUBMIT"]').click()
        cy.get('h1').should('have.text',"Thank You for your Message!")    
    })


    it('verify the contact us form 2',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('h2[name="contactme"]').should('be.visible')
        //selecting the element by text
        //<h2 name="contactme" class="section_header">CONTACT US</h2>
        cy.contains('CONTACT US').should('be.visible')
        // Testing the contact us form
        cy.get('input[name="first_name"]').type(userinfo2.firstName)
        cy.get('input[name="last_name"]').type(userinfo2.lastName)
        cy.get('input[name="email"]').type(userinfo2.email)
        cy.get('textarea[name="message"]').type(userinfo2.comment)
        cy.get('input[value="SUBMIT"]').click()
        cy.get('h1').should('have.text',"Thank You for your Message!")    
    })


    it.only('verify the contact us form 3',function(){
        cy.fixture('contactus').then(function(userinfo3){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('h2[name="contactme"]').should('be.visible')
        //selecting the element by text
        //<h2 name="contactme" class="section_header">CONTACT US</h2>
        cy.contains('CONTACT US').should('be.visible')
        // Testing the contact us form
        cy.get('input[name="first_name"]').type(userinfo3.firstName)
        cy.get('input[name="last_name"]').type(userinfo3.lastName)
        cy.get('input[name="email"]').type(userinfo3.email)
        cy.get('textarea[name="message"]').type(userinfo3.comment)
        cy.get('input[value="SUBMIT"]').click()
        cy.get('h1').should('have.text',"Thank You for your Message!")    

        })

    })

})
