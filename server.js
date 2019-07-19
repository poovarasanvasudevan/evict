require('dotenv').config();
const queue = require('./lib/bull');

const express = require('express');
const helmet = require('helmet');
const compression = require('compression');


const Next = require("next");
const {postgraphile} = require("postgraphile");
const ConnectionFilterPlugin = require("postgraphile-plugin-connection-filter");
const {SystemPlugin} = require('./lib/graphile-plugins');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const db = require('./database/promise');

const app = Next({dev});
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();
    server.use(helmet());
    server.use(compression());

    server.use(postgraphile(process.env.DB_URL, process.env.DB_SCHEMA, {
        appendPlugins: [ConnectionFilterPlugin, SystemPlugin],
        graphiql: true,
        graphiqlRoute: "/graphiql"
    }));
    server.get('*', (req, res) => {
        return handle(req, res);
    });
    server.listen(port, err => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});
