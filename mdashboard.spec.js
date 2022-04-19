describe("Dashboard page", () => {
    beforeEach(() => {
    });

    it("should display the dashboard page", () => {
        cy.get("h1").contains("Dashboard");
        cy.get("h3").contains("Your email is aswinadi@yahoo.com");
    });
});
