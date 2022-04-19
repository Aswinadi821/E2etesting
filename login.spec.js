describe("Login Page", () => {
    beforeEach(() => {
        const baseUrl = Cypress.config().baseUrl;
        cy.visit(baseUrl);
    });
    it("should verify page labels", () => {
        cy.get("#forgotLink").contains("Forgot password?");
        cy.get("#loginButton").contains("Login");
        cy.get("#signupMenuLink").contains("Signup");
        cy.get("#loginMenuLink").contains("Login");

    });
    it("should verify login validation message", () => {
        cy.get("#loginButton").click();
        cy.get(".has-text-danger").contains("Please give valid data");
        cy.url().should("include", "/#");
    });
    it("should display the login page", () => {
        cy.url().should("include", "/login");
        cy.get("h1").contains("Login");
    });
    it("should check with invalid login inputs", () => {
        cy.login('aswin', '111111');
        cy.get(".has-text-danger").contains("Please give valid data");
    });
    it("should check with valid login inputs", () => {
        cy.login('aswinadi@yahoo.com.', '111111');
    });
   
    
    
    
    
   
   







})