import { Contact } from "./contact";
import { getContacts } from "./contact.service";

export function contactsResolver(first: number, afterCursor: number, searchKey: string) {
    let afterIndex: number = 0;
    let contactList = getContacts();

    if (searchKey.length > 0) {
        contactList = contactList.filter(
            (x) =>
                x.firstname.toLocaleLowerCase().includes(searchKey.toLocaleLowerCase()) ||
                x.lastname.toLocaleLowerCase().includes(searchKey.toLocaleLowerCase())
        );
    }

    if (afterCursor) {
        let nodeIndex = contactList.findIndex((da) => da.id === afterCursor);

        if (nodeIndex >= 0) {
            afterIndex = nodeIndex + 1;
        }
    }

    const slicedContacts = contactList.slice(afterIndex, afterIndex + first);

    const edges = slicedContacts.map((node) => ({
        node,
        cursor: node.id,
    }));

    let startCursor: number = 0;

    if (edges.length > 0) {
        startCursor = edges[edges.length - 1].node.id;
    }

    const hasNextPage = contactList.length > afterIndex + first;

    return {
        totalCount: contactList.length,
        edges,
        pageInfo: {
            startCursor,
            hasNextPage,
        },
    };
}

export function searchContactsResolver(searchKey: string) {
    const contactList: Contact[] = getContacts();

    const result = contactList.filter(
        (x) =>
            x.firstname.toLocaleLowerCase().includes(searchKey.toLocaleLowerCase()) ||
            x.lastname.toLocaleLowerCase().includes(searchKey.toLocaleLowerCase())
    );
    return {
        contacts: result,
    };
}
