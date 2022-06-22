class Login{

    NavigateToCreateAccount(){
        return cy.get('.loginLink').click();
    }

    getEmailAddress(){
        return cy.get("input[name='email']");
    }

    getPassword(){
        return cy.get("input[name='password']");
    }

    getSubmit(){
        return cy.get("button[type='submit']");
    }

    getNotification(){
        return cy.get(".Toastify__toast-body");
    }

}
export default Login