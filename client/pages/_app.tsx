import React from "react";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";
import Head from "next/head";
import "../styles/global.scss";

const App = ({ Component, pageProps }: AppProps) => {
    const apolloClient = useApollo(pageProps.initialApolloState);

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <link rel="shortcut icon" href="favicon.ico" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="A modern design system for your new landing and web pages." />
                <link
                    href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&display=swap"
                    rel="stylesheet"
                />
                <title>Apollo Contacts</title>
                <script src="https://use.fontawesome.com/releases/v5.1.0/js/all.js"></script>
            </Head>
            <ApolloProvider client={apolloClient}>
                <Component {...pageProps} />
            </ApolloProvider>
        </>
    );
};

export default App;
