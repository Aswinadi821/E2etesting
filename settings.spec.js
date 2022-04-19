describe("Settings page", () => {
    beforeEach(() => {
        cy.get("#settingsLink").click();
    });
    it("should display the settings page", () => {
        cy.wait(500);
        cy.get("h1").contains("Settings");
    });
});
