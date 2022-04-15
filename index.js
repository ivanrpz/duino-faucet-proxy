var express = require('express');
require('dotenv').config();
var app = express();
const { exec } = require("child_process");
const port = 3000

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
    exec(`curl -x ${process.env.PROXY_ADDRESS} --location --request GET 'https://server.duinocoin.com/transaction/?username=ivanrpz&password=${process.env.DUINO_PASSWORD}&recipient=${req.query.user}&amount=${req.query.amount}&memo=Try%20duino-faucet.com!'`, (error, stdout, stderr) => {
        res.send(`stdout: ${stdout}`);
    });
});

app.get('/ping', function(req, res) {
    res.send('pong');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})