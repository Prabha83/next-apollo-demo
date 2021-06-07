import { Contact } from "./contact";
import casual from "casual";

export function getContacts(): Contact[] {
    const contactList: Contact[] = [];

    for (let index = 1; index <= 2000; index++) {
        const contact: Contact = {
            id: index,
            firstname: casual.first_name,
            lastname: casual.last_name,
            email: casual.email,
            phonenumber: casual.phone,
            address: casual.address1,
            city: casual.city,
            postcode: casual.zip({ fi: 5, se: 3 }),
        };
        contactList.push(contact);
    }

    return contactList;
}
