///<reference types="cypress" />

import GetStarted from "../../fixtures/Merchant/GetStarted.cy";
import Login from "../../support/PageObjectModels/Merchant/Login";

describe("Login as merchant",()=>{
    beforeEach("navigate to login page",()=>{

        cy.NavigateToLoginPage();
        cy.fixture("Merchant/Login.json").then(function(userCred){
            this.userCred = userCred;
        })
    })

    it("should not log invalid user in",function(){
        let login = new Login();
        let getStarted =  new GetStarted();

        console.log(this.userCred.invalidUser.email);
        console.log(this.userCred.invalidUser.password);
        cy.log(this.userCred.invalidUser.email);

        login.getEmailAddress().type(this.userCred.invalidUser.email);
        login.getPassword().type(this.userCred.invalidUser.password);
        login.getSubmit().click();

        login.getNotification().should('have.text',"Incorrect email or password");

        login.getEmailAddress().clear();
        login.getPassword().clear();
    })

    it("should log valid user in",function(){
        let login = new Login();
        let getStarted =  new GetStarted();

        login.getEmailAddress().type(this.userCred.validUser.email);
        login.getPassword().type(this.userCred.validUser.password);
        login.getSubmit().click();

        cy.wait(5000);
        getStarted.getTitle().should('have.text',"Get Started");
        
    })

})