module.exports = (function () {
    'use strict';
    var router = require('express').Router();
    const { version } = require('../package.json');

    router.get('/api', function (req, res) {
        res.send(200, { code: 200, message: 'API is working in version v' + version });
    });

    return router;
})();