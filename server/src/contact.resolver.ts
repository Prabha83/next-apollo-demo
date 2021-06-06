import { getContacts } from "./contact.service";

export default function contactsResolver(first: number, afterCursor: number) {
    let afterIndex: number = 0;
    const contactList = getContacts();

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
