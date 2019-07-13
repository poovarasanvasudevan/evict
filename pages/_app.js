import React from "react";
import App, {Container} from "next/app";
import "../styles/app.sass";
import Router from 'next/router';


import withGraphQLClient from '../lib/with-graphql-client'
import {ClientContext} from 'graphql-hooks'

Router.events.on('routeChangeComplete', () => {

});


class MyApp extends App {
    static async getInitialProps({Component, ctx}) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return {pageProps};
    }

    render() {
        const {Component, pageProps, graphQLClient} = this.props;

        return (
            <ClientContext.Provider value={graphQLClient}>
                <Container>
                    <Component {...pageProps} />
                </Container>
            </ClientContext.Provider>
        );
    }
}

export default withGraphQLClient(MyApp)
