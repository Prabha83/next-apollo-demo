import { useLazyQuery, useQuery } from "@apollo/client";
import React, { ChangeEvent, FC, useState } from "react";
import { ContactType } from "../lib/models/Contact";
import GET_CONTACTS from "../lib/queries/getContacts";

type ContactResponse = {
    contacts: ContactType[] | undefined;
};

type queryVariables = {
    first: number;
    afterCursor: number;
    searchKey: String;
};

const SearchContacts: FC = () => {
    const [searchParam, setSearchParam] = useState("");

    const [getContacts, { data, loading, error }] = useLazyQuery<ContactResponse, queryVariables>(GET_CONTACTS, {
        variables: { first: 20, afterCursor: 0, searchKey: searchParam },
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchParam(e.target.value);

        if (e.target.value.length > 2) {
            getContacts();
        }
    };

    return (
        <div className="field searchField">
            <div className="control has-icons-left">
                <input
                    className="input is-rounded"
                    value={searchParam}
                    onChange={handleChange}
                    type="text"
                    placeholder="Search"
                />
                <span className="icon is-medium is-left">
                    <i className="fas fa-search"></i>
                </span>
            </div>
        </div>
    );
};

export default SearchContacts;
