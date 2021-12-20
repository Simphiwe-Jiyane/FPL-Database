const PORT = 3000;
const express = require('express');
const axios =  require('axios').default;

const app = express();

app.listen(PORT, () => console.log(`App is running is running on port: ${PORT}`));

const players = require('./routes/players.route');

app.use('/players', players);