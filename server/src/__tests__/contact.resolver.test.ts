import { contactsResolver } from "../contact.resolver";

describe("Contacts resolver", () => {
    it("should return the first 20 contacts", () => {
        const contacts = contactsResolver(20, 0, "");

        // Assert
        expect(contacts.totalCount).toBe(2000);
        expect(contacts.edges.length).toBe(20);
        expect(contacts.pageInfo.hasNextPage).toBe(true);
    });
});
