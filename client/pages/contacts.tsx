import { useQuery } from "@apollo/client";
import { ContactResult } from "../lib/models/ContactResult";
import { ContactVars } from "../lib/models/ContactResultVars";
import GET_CONTACTS from "../lib/queries/getContacts";
import Layout from "../components/Layout";
import { FC } from "react";
import ContactCard from "../components/ContactCard";

type ContactResponse = {
    contacts: ContactResult | undefined;
};

const ContactsPage: FC = () => {
    const { data, loading, error, fetchMore } = useQuery<ContactResponse, ContactVars>(GET_CONTACTS, {
        variables: { first: 10, afterCursor: 1 },
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
                    first: 10,
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
                    <div className="columns is-vcentered">
                        <div className="column is-5 is-offset-1 landing-caption">
                            <h1 className="title is-1 is-bold is-spaced">Contacts</h1>
                            <div className="subtitle">Total contacts {totalCount}</div>
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
