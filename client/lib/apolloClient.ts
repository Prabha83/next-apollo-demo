import { NodeType } from "./models/Node";
import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from "@apollo/client";
import { useMemo } from "react";

let apolloClient: ApolloClient<NormalizedCacheObject>;

function createApolloClient() {
    return new ApolloClient({
        ssrMode: typeof window === "undefined",
        link: new HttpLink({
            uri: process.env.GRAPHQL_URL,
        }),
        cache: new InMemoryCache({
            typePolicies: {
                Query: {
                    fields: {
                        contacts: {
                            keyArgs: false,
                            merge(existing, incoming) {
                                if (!incoming) return existing;
                                if (!existing) return incoming; // existing will be empty the first time

                                if (incoming.totalCount < 2000) return incoming; //for search result

                                let mergedEdges: NodeType[] = [];

                                if (incoming?.edges) {
                                    mergedEdges = [...(existing?.edges || []), ...incoming.edges];
                                }

                                return {
                                    ...incoming,
                                    edges: mergedEdges,
                                };
                            },
                        },
                    },
                },
            },
        }),
    });
}

export function initializeApollo(initialState: any = null) {
    const _apolloClient = apolloClient ?? createApolloClient();

    // If your page has Next.js data fetching methods that use Apollo Client,
    // the initial state gets hydrated here
    if (initialState) {
        // Get existing cache, loaded during client side data fetching
        const existingCache = _apolloClient.extract();

        // Restore the cache using the data passed from
        // getStaticProps/getServerSideProps combined with the existing cached data
        _apolloClient.cache.restore({ ...existingCache, ...initialState });
    }

    // For SSG and SSR always create a new Apollo Client
    if (typeof window === "undefined") return _apolloClient;

    // Create the Apollo Client once in the client
    if (!apolloClient) apolloClient = _apolloClient;
    return _apolloClient;
}

export function useApollo(initialState: any) {
    const store = useMemo(() => initializeApollo(initialState), [initialState]);
    return store;
}
