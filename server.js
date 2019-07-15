require('dotenv').config();
const queue = require('./lib/bull');
const fastify = require("fastify")({
    logger: {level: "error"},
    pluginTimeout: 200000
});

const Next = require("next");
const {postgraphile} = require("postgraphile");
const ConnectionFilterPlugin = require("postgraphile-plugin-connection-filter");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";

fastify.use(
    postgraphile(process.env.DB_URL, process.env.DB_SCHEMA, {
        appendPlugins: [ConnectionFilterPlugin],
        graphiql: true,
        graphiqlRoute: "/graphiql"
    })
);

queue.add('test' , {} , {});

fastify.register((fastify, opts, next) => {
    const app = Next({dev});
    app
        .prepare()
        .then(() => {
            if (dev) {
                fastify.get("/_next/*", (req, reply) => {
                    return app.handleRequest(req.req, reply.res).then(() => {
                        reply.sent = true;
                    });
                });
            }

            fastify.get("/*", (req, reply) => {
                return app.handleRequest(req.req, reply.res).then(() => {
                    reply.sent = true;
                });
            });

            fastify.setNotFoundHandler((request, reply) => {
                return app.render404(request.req, reply.res).then(() => {
                    reply.sent = true;
                });
            });

            next();
        })
        .catch(err => next(err));
});

fastify.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
});
