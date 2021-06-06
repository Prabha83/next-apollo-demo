import { gql } from "@apollo/client";

const GET_CONTACTS = gql`
    query GetContacts($first: Int, $afterCursor: Int) {
        contacts(first: $first, afterCursor: $afterCursor) {
            totalCount
            edges {
                cursor
                node {
                    id
                    firstname
                    lastname
                    email
                    phonenumber
                    address
                    city
                    postcode
                }
            }
            pageInfo {
                startCursor
                hasNextPage
            }
        }
    }
`;

export default GET_CONTACTS;
