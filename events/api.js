const { app } = require('../index.js');
const { version } = require('../package.json');

app.get('/api', (req, res) => {
    res.send({ code: 200, message: 'API is working in version v' + version });
});