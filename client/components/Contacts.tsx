import { useQuery } from "@apollo/client";
import { ContactResult } from "../lib/models/ContactResult";
import { ContactVars } from "../lib/models/ContactResultVars";
import GET_CONTACTS from "../lib/queries/getContacts";
import ContactCard from "./ContactCard";

type ContactResponse = {
    contacts: ContactResult | undefined;
};

function Contacts({}) {
    const { data, loading, error, fetchMore } = useQuery<ContactResponse, ContactVars>(GET_CONTACTS, {
        variables: { first: 10, afterCursor: 1 },
    });

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return null;
    }

    if (!data || !data.contacts) return <p>No contacts found</p>;

    const { totalCount, edges, pageInfo } = data.contacts;

    const fetchMoreContacts = () => {
        if (pageInfo.hasNextPage) {
            fetchMore({
                variables: {
                    first: 10,
                    afterCursor: pageInfo.startCursor,
                },
                // updateQuery: (previousResult, { fetchMoreResult }: { fetchMoreResult: ContactResponse }) => {
                //     if (!fetchMoreResult) {
                //         return previousResult;
                //     }

                //     if (fetchMoreResult?.contacts?.edges) {
                //         fetchMoreResult.contacts.edges = [
                //             ...(previousResult.contacts?.edges || []),
                //             ...fetchMoreResult.contacts.edges,
                //         ];
                //     }

                //     return fetchMoreResult;
                // },
            });
        }
    };

    return (
        <div className="tile is-ancestor">
            <div className="title">Total contacts {totalCount}</div>
            <ContactCard contacts={edges} />
            {pageInfo.hasNextPage && (
                <button className="button is-link" onClick={fetchMoreContacts}>
                    Load more
                </button>
            )}
        </div>
    );
}

export default Contacts;
