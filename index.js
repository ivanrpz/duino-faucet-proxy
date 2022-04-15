var express = require('express');
require('dotenv').config();
var app = express();
const { exec } = require("child_process");

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
    exec(`curl -x ${process.env.PROXY_ADDRESS} --location --request GET 'https://server.duinocoin.com/transaction/?username=ivanrpz&password=${process.env.DUINO_PASSWORD}&recipient=${req.query.user}&amount=${req.query.amount}&memo=duino-faucet.com'`, (error, stdout, stderr) => {
        res.send(stdout);
    });
});

app.get('/ping', function(req, res) {
    res.send('pong');
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})