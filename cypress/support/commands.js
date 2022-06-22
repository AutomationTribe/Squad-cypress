// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("NavigateToLoginPage",()=>{
    cy.visit("https://d26py1i7xs8g2k.cloudfront.net");
})

Cypress.Commands.add("login",()=>{

        cy.NavigateToLoginPage();
        cy.get("input[name='email']").type("demo@merchant.com");
        cy.get("input[name='password']").type("Password1");
        cy.get("button[type='submit']").click();
        cy.wait(1000);
        
})