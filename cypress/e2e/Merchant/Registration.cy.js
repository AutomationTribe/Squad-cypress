///<reference types="cypress" />

import Login from "../../support/PageObjectModels/Merchant/Login"
import Register from "../../support/PageObjectModels/Merchant/Register";

describe("Merchant Registration",function(){
    before("Navigate to merchant page",()=>{
        //cy.fixture('Merchant/Register.json').as("merchant");
        //cy.fixture('/Me')
        cy.fixture('Merchant/Register.json').then((data)=>{
            this.data = data
        })
        cy.visit("https://d26py1i7xs8g2k.cloudfront.net")
        let  login = new Login();
         login.NavigateToCreateAccount();  
    })

    it("should register valid user",()=>{
        let register = new Register();
        register.getName().type(this.data[0].name);
        register.getBusinessName.type(this.data[0].businessName);
    })

})