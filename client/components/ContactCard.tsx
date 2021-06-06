import React, { FC } from "react";
import { NodeType } from "../lib/models/Node";

type Props = {
    contacts: NodeType[];
};

const ContactCard: FC<Props> = ({ contacts }) => {
    function renderCard() {
        return contacts.map(({ node: contact }) => (
            <div key={contact.id} className="card">
                <div className="card-content">
                    <p className="title has-text-link">
                        {contact.firstname} {contact.lastname}
                    </p>
                    <p className="is-6">
                        <span className="icon-text">
                            <span className="icon">
                                <i className="far fa-envelope"></i>
                            </span>
                            <span>{contact.email}</span>
                        </span>
                    </p>
                    <p className="is-6">
                        <span className="icon-text">
                            <span className="icon">
                                <i className="fas fa-phone"></i>
                            </span>
                            <span>{contact.phonenumber}</span>
                        </span>
                    </p>
                </div>
            </div>
        ));
    }

    if (!contacts) return <p>Loading...</p>;

    return <div className="tile is-8 is-vertical">{renderCard()}</div>;
};

export default ContactCard;
