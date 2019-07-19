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
const knex = require('./database');
const app = Next({dev});
const handle = app.getRequestHandler();


const JSONStream = require('JSONStream');
const QueryStream = require('pg-query-stream');

const apicache = require('apicache');

app.prepare().then(() => {
    const server = express();
    server.use(helmet());
    server.use(compression());

    const cache = apicache.middleware;

    server.get('/test', cache('5 minutes'), (req, res) => {
        knex.select('*').from('database_apps').stream((data) => data.pipe(JSONStream.stringify()).pipe(res));
    });
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
