import Document, {Html, Head, Main, NextScript} from "next/document";





class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const originalRenderPage = ctx.renderPage;

        ctx.renderPage = () =>
            originalRenderPage({
                // useful for wrapping the whole react tree
                enhanceApp: App => App,
                // useful for wrapping in a per-page basis
                enhanceComponent: Component => Component
            });

        // Run the parent `getInitialProps` using `ctx` that now includes our custom `renderPage`
        const initialProps = await Document.getInitialProps(ctx);

        return initialProps;
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
