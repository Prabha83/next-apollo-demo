/// <reference types="cypress" />

describe("Contacts page", () => {
    it("should load the first 20 of 2000 contacts", () => {
        cy.visit("/contacts");

        cy.get(".subtitle").should("be.visible").and("have.text", "shows 20 of 2000");
    });

    it("should display the load more button", () => {
        cy.visit("/contacts");

        cy.get(".button").should("be.visible").and("have.text", "Load more");
    });

    it("should load next 20 contacts on click of load more button", () => {
        cy.visit("/contacts");

        cy.get(".button").should("have.text", "Load more").click();

        cy.wait(2000);

        cy.get(".subtitle").should("be.visible").and("have.text", "shows 40 of 2000");
    });
});
