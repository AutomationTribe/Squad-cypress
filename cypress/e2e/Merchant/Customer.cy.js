///<reference types="cypress" />

import Customer from "../../support/PageObjectModels/Merchant/Customer";
import Navbar from "../../support/PageObjectModels/Merchant/Navbar";

describe("Customer modules test cases",()=>{
  
   before("Customer Login",function(){
    
    cy.login();
    cy.fixture("Merchant/Customer").then(function(data){
      
        this.data = data;
    })

    let customer = new Customer();
    let navBar =  new Navbar();

    navBar.getOnlinePayments().click({force:true});
    cy.wait(3000);
    navBar.getCustomerLink().click();

    this.customer = customer;
    this.navBar = navBar;
    
   })

   it("should create a customer successfully",function(){

        let customer = new Customer();
        let navBar = new Navbar();

       navBar.getOnlinePayments().click();
       navBar.getCustomerLink().click();

       customer.getCustomerBtn().click();
       customer.getFullName().type(this.data.validCustomer.fullName);
       customer.getEmail().type(this.data.validCustomer.email);
       customer.getPhoneNumber().type(this.data.validCustomer.phoneNumber);
       customer.getSaveBtn().click();

       customer.getAlert().should('have.text',"Customer created successfully");

   })

   it("should not create already existing customer",function(){

    let customer = new Customer();
    let navBar = new Navbar();

   navBar.getOnlinePayments().click();
   navBar.getCustomerLink().click();

   customer.getCustomerBtn().click();
   customer.getFullName().type(this.data.validCustomer.fullName);
   customer.getEmail().type(this.data.validCustomer.email);
   customer.getPhoneNumber().type(this.data.validCustomer.phoneNumber);
   customer.getSaveBtn().click();

   customer.getAlert().should('have.text',"customer with email " + this.data.validCustomer.email + " already exists");

})

it("should download export csv",function(){

   this.customer.getExportBtn().click();

   //assert here
})

it.only("should search and return existing customer",function(){

    console.log(this.customer.getCustomerTable().find("tr"));
})



})