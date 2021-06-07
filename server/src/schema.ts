import { GraphQLList, GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLBoolean } from "graphql";
import { contactsResolver, searchContactsResolver } from "./contact.resolver";

const contactFields = {
    id: { type: GraphQLInt },
    firstname: { type: GraphQLString },
    lastname: { type: GraphQLString },
    email: { type: GraphQLString },
    phonenumber: { type: GraphQLString },
    address: { type: GraphQLString },
    city: { type: GraphQLString },
    postcode: { type: GraphQLString },
};

const pageInfoFields = {
    startCursor: { type: GraphQLInt },
    hasNextPage: { type: GraphQLBoolean },
};

const ContactType = new GraphQLObjectType({
    name: "Contact",
    fields: () => contactFields,
});

const EdgeType = new GraphQLObjectType({
    name: "Edge",
    fields: {
        node: {
            type: ContactType,
        },
        cursor: { type: GraphQLInt },
    },
});

const PageInfoType = new GraphQLObjectType({
    name: "PageInfo",
    fields: () => pageInfoFields,
});

const ContactResult = new GraphQLObjectType({
    name: "ContactResult",
    fields: {
        totalCount: { type: GraphQLString },
        edges: { type: new GraphQLList(EdgeType) },
        pageInfo: { type: PageInfoType },
    },
});

const SearchResult = new GraphQLObjectType({
    name: "SearchResult",
    fields: {
        contacts: { type: new GraphQLList(ContactType) },
    },
});

const ContactQuery = new GraphQLObjectType({
    name: "Contacts",
    fields: {
        contacts: {
            type: ContactResult,
            args: {
                first: { type: GraphQLInt },
                afterCursor: { type: GraphQLInt },
                searchKey: { type: GraphQLString },
            },
            resolve: (parent, args) => {
                const { first, afterCursor, searchKey } = args;

                return contactsResolver(first, afterCursor, searchKey);
            },
        },
        searchContacts: {
            type: SearchResult,
            args: { searchKey: { type: GraphQLString } },
            resolve: (parent, args) => {
                const { searchKey } = args;

                return searchContactsResolver(searchKey);
            },
        },
    },
});

export default new GraphQLSchema({
    query: ContactQuery,
});
