'use strict';

const express = require('express');

const PORT = 8000;
const HOST = 'localhost';

const app = express();
app.get('/', (_req, res) => {
  const response = {
    name: 'Saddam Satria Ardhi',
  };
  res.json(response).status(200);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
