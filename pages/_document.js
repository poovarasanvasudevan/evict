import Document, {Html, Head, Main, NextScript} from "next/document";

import {ServerStyleSheet} from 'styled-components';


class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;
        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
                });

            // Run the parent `getInitialProps` using `ctx` that now includes our custom `renderPage`
            const initialProps = await Document.getInitialProps(ctx);

            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                )
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (

            <Html>
            <Head>
                {/* <link rel="stylesheet" href="/static/css/blueprint.css" />
          <link rel="stylesheet" href="/static/css/blueprint-icons.css" /> */}
                <link rel="stylesheet" href="/static/css/blueprint-icons.css"/>
                <link rel="stylesheet" href="/static/css/app.css"/>

            </Head>
            <body>

            <Main/>
            <NextScript/>
            </body>
            </Html>
        );
    }
}

export default MyDocument;
