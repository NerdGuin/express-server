const express = require('express');
const rateLimit = require('express-rate-limit');
const app = express();
const port = 3000;
const Console = require('./objects/console.js');
const fs = require('fs');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per window
    message: {code: 429, message: 'Too many requests, please try again later' }
});
app.use(limiter);

app.get('/', (req, res) => {
    res.send({ code: 200, message: '' });
});

app.listen(port, () => {
    Console.sendMessage('INFO', `API started on port ${port}`);
    loadEvents();
});

function loadEvents() {
    let elist = fs.readdirSync('./events/');
    for (let k in elist) {
        eval('var ' + elist[k].replace('.js', '') + ' = require(\'./events/\' + elist[k]);');
    }
    Console.sendMessage('INFO', 'All events are loaded.');
}

module.exports = { app }