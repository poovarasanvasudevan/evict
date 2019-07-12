import React from "react";
import App, {Container} from "next/app";
import "../styles/app.sass";
import Router from 'next/router';

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
        const {Component, pageProps} = this.props;

        return (
            <Container>
                <Component {...pageProps} />
            </Container>
        );
    }
}

export default MyApp;
