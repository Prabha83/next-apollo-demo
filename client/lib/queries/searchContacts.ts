import { gql } from "@apollo/client";

const SEARCH_CONTACTS = gql`
    query SearchContacts($searchKey: String) {
        searchContacts(searchKey: $searchKey) {
            contacts {
                id
                lastname
                firstname
            }
        }
    }
`;

export default SEARCH_CONTACTS;
