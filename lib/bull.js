var Queue = require('bull');
var appQueue = new Queue('App QUEUE', 'redis://10.165.135.126:6379');
appQueue.process(function (job, done) {

    done();
});

module.exports = appQueue;
