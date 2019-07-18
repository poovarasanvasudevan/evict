const initOptions = {
    capSQL: true,
    schema: 'public',
    promiseLib: require('bluebird'),
    connect: function (client, dc, useCount) {
        const cp = client.connectionParameters;
        console.log('Connected to database:', cp.database);
    },
    disconnect: function (client, dc) {
        const cp = client.connectionParameters;
        console.log('Disconnecting from database:', cp.database);
    },
    query: function (e) {
        console.log('QUERY:', e.query);
    }
};
const pgp = require('pg-promise')(initOptions);

const monitor = require('pg-monitor');
monitor.attach(initOptions);
monitor.setTheme('matrix');
monitor.setLog((msg, info) => {
    console.log(msg,info)
});
const db = pgp(process.env.DB_URL);

db.connect()
    .then(obj => {
        sco = obj;
        sco.client.on('notification', data => {
            console.log('Received:', data);
        });
        return sco.none('LISTEN $1~', 'my-channel');
    })
    .catch(error => {
        console.log('Error:', error);
    });

module.exports = db;
