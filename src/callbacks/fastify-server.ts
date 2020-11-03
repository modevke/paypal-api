import fastify from 'fastify';

const app = fastify({
    logger: true,
    pluginTimeout: 100000,
    trustProxy: true
});

app.get('/success-callback', {}, (req, res) => {

    res.send();

});

app.get('/cancel-callback', {}, (req, res) => {

    res.send();

});



app.listen(3020, '0.0.0.0', function (err, address) {
    if (err) {
        app.log.error(err);
        process.exit(1);
    }
    app.log.info(`Server listening on port ${address}`);
});
  