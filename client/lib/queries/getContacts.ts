import { gql } from "@apollo/client";

const GET_CONTACTS = gql`
    query GetContacts($first: Int, $afterCursor: Int, $searchKey: String!) {
        contacts(first: $first, afterCursor: $afterCursor, searchKey: $searchKey) {
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
