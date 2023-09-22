const express = require('express');
const rateLimit = require('express-rate-limit');
const app = express();
const port = 3000;
const Console = require('./objects/console.js');
const { connect } = require('./events/dbMananger.js');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per window
    message: {code: 429, message: 'Too many requests, please try again later' }
});
app.use(limiter);
app.use(require('./events/api.js'));

app.listen(port, () => {
    // connect();
    Console.sendMessage('INFO', `API started on port ${port}`);
});

module.exports = { app }