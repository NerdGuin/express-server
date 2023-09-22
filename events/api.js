module.exports = (function () {
    'use strict';
    var router = require('express').Router();
    const { version } = require('../package.json');

    router.get('/api', function (req, res) {
        res.json({ code: 200, message: 'API is working in version v' + version });
    });

    return router;
})();

