/// <reference types="cypress" />

describe("Home page", () => {
    it("should display the title", () => {
        cy.visit("/");

        cy.get(".title").should("exist");
    });

    it("should navigate to about page", () => {
        cy.visit("/about");

        cy.get(".title").should("exist");
    });

    it("should navigate to contacts page", () => {
        cy.visit("/contacts");

        cy.get(".title").should("exist");
    });
});
