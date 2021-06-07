import { useQuery } from "@apollo/client";
import { ContactResult } from "../lib/models/ContactResult";
import { ContactVars } from "../lib/models/ContactResultVars";
import GET_CONTACTS from "../lib/queries/getContacts";
import Layout from "../components/Layout";
import { FC } from "react";
import ContactCard from "../components/ContactCard";
import SearchContacts from "../components/SearchContacts";

type ContactResponse = {
    contacts: ContactResult | undefined;
};

const ContactsPage: FC = () => {
    const { data, loading, error, fetchMore } = useQuery<ContactResponse, ContactVars>(GET_CONTACTS, {
        variables: { first: 20, afterCursor: 0 },
    });

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <p>Error</p>;
    }

    const fetchMoreContacts = () => {
        if (pageInfo.hasNextPage) {
            fetchMore({
                variables: {
                    first: 20,
                    afterCursor: pageInfo.startCursor,
                },
            });
        }
    };

    if (!data || !data.contacts) return <p>No contacts found</p>;

    const { totalCount, edges, pageInfo } = data.contacts;

    return (
        <Layout>
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-offset-2 is-centered">
                            <h1 className="title is-1 is-bold is-spaced">Contacts</h1>
                            <SearchContacts />

                            <div className="subtitle is-7 has-text-right">
                                shows {edges.length} of {totalCount}
                            </div>
                            <ContactCard contacts={edges} />
                            {pageInfo.hasNextPage && (
                                <button className="button is-link" onClick={fetchMoreContacts}>
                                    Load more
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ContactsPage;
