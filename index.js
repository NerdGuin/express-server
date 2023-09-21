const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send({code: 200, message: ''});
})

app.listen(port, () => {
  console.log(`API started on port ${port}`);
})