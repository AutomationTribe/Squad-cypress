class Customer{

    getSearch(){

        return cy.get("input['#searchInput']");
    }

    getCustomerBtn(){
       return cy.contains("Add Customer");
    }

    getFullName(){
       return cy.get("input[name='fullname']");
    }

    getEmail(){
      return  cy.get("input[name='email']");
    }

    getPhoneNumber(){
      return  cy.get("input[name='phoneNumber']");
    }

    getSaveBtn(){
      return  cy.get("Button[type='submit']");
    }

    getAlert(){
        return cy.get(".Toastify__toast-body");
    }

    getExportBtn(){
        return cy.contains("Export CSV");
    }

    getCustomerTable(){
        return cy.get("table[id='dataTable']");
    }

}
export default Customer