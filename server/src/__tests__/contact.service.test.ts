import { getContacts } from "../contact.service";

describe("Contact service", () => {
    it("should return the contacts list", () => {
        const contacts = getContacts();

        expect(contacts.length).toBe(2000);
    });
});
