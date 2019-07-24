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
const cors = require("cors");
const apicache = require('apicache');

var sqlite3 = require('sqlite3').verbose();
var dbs = new sqlite3.Database('./im_cache.db');

const all = function (query, params) {
    return new Promise(function (resolve, reject) {
        if (params == undefined) params = [];

        dbs.all(query, params, function (err, rows) {
            if (err) reject("Read error: " + err.message);
            else {
                resolve(rows);
            }
        });
    });
};

app.prepare().then(() => {
    const server = express();
    server.use(helmet());
    server.use(compression());
    server.use(cors());

    const cache = apicache.middleware;

    server.get('/test', cache('5 minutes'), (req, res) => {
        knex.select('*').from('database_apps').stream((data) => data.pipe(JSONStream.stringify()).pipe(res));
    });

    server.get('/qry', async (req, res) => {
        // resp = [];
        resp = await all(req.query.query);
        res.json(resp);
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
