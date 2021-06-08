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
                    <div className="columns">
                        <div className="column">
                            <p className="is-6 pb-3">
                                <span className="icon-text">
                                    <span className="icon">
                                        <i className="far fa-envelope is-medium"></i>
                                    </span>
                                    <span>{contact.email}</span>
                                </span>
                            </p>
                            <p className="is-6 pb-3">
                                <span className="icon-text">
                                    <span className="icon">
                                        <i className="fas fa-phone is-medium"></i>
                                    </span>
                                    <span>{contact.phonenumber}</span>
                                </span>
                            </p>
                        </div>
                        <div className="column">
                            <p className="is-6 pb-3">
                                <span className="icon-text">
                                    <span className="icon">
                                        <i className="fas fa-address-card is-medium"></i>
                                    </span>
                                    <span>{contact.address}</span>
                                </span>
                            </p>
                            <p className="is-6 pb-3">
                                <span className="icon-text">
                                    <span className="icon">
                                        <i className="fas fa-map-marker-alt is-medium"></i>
                                    </span>
                                    <span>{contact.city}</span>
                                </span>
                            </p>
                            <p className="is-6 pb-3">
                                <span className="icon-text">
                                    <span className="icon">
                                        <i className="fas fa-plus is-medium"></i>
                                    </span>
                                    <span>{contact.postcode}</span>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        ));
    }

    if (!contacts) return <p>Loading...</p>;

    return <div className="tile is-8 is-vertical">{renderCard()}</div>;
};

export default ContactCard;
