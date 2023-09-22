module.exports = (function () {
    'use strict';
    var router = require('express').Router();
    const { version } = require('../package.json');
    const { getAllUsers, getUser } = require('./dbMananger.js');

    router.get('/api', function (req, res) {
        res.status(200).send({ message: 'API working successfully', version: version });
    });

    router.get('/api/users', async function (req, res) {
        res.status(200).send(await getUser());
    });

    router.get('/api/users/:id', async function (req, res) {
        const user = await getUser(req.params.id);
        if (user) res.status(200).send(user);
        if (!user) res.status(404).send({ message: 'User not found' });
    });

    return router;
})();