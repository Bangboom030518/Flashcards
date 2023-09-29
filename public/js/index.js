"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const port = parseInt(process.env.PORT) || 3000;
const server = require('http').Server(app);
const bodyParser = require('body-parser');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
server.listen(port, () => {
    console.log('Server Started');
});
app.get('/', (req, res) => {
    return res.send('Sorry, this page is still being worked on');
});
app.get('/study', (req, res) => {
    return res.render('index', {
        main: 'study'
    });
});
