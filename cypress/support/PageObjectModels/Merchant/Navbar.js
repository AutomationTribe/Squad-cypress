class Navbar{

    getOnlinePayments(){
       return cy.contains("Online Payments");
    }

    getCustomerLink(){
       return cy.contains("Customers");
    }

}
export default Navbar