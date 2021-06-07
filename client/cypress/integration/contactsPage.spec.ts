/// <reference types="cypress" />

describe("Contacts page", () => {
    it("should load the first 10 of 20 contacts", () => {
        cy.visit("/contacts");

        cy.get(".subtitle").should("be.visible").and("have.text", "Contacts 10 of 20");
    });

    it("should display the load more button", () => {
        cy.visit("/contacts");

        cy.get(".button").should("be.visible").and("have.text", "Load more");
    });

    it("should load next 10 contacts on click of load more button", () => {
        cy.visit("/contacts");

        cy.get(".button").should("have.text", "Load more").click();

        cy.wait(2000);

        cy.get(".subtitle").should("be.visible").and("have.text", "Contacts 20 of 20");
        cy.get(".button").should("not.exist");
    });
});
