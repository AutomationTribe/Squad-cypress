class Register {

    getName(){
        return cy.get("input[name='fullName']");
    }

    getBusinessName(){
        return cy.get("input[name='business_name']");
    }
}
export default Register