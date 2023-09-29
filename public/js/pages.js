"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = exports.index = exports.study = void 0;
function study(req, res) {
    return res.render('index', {
        main: 'study'
    });
}
exports.study = study;
function index(req, res) {
    return res.send('Sorry, this page is still being worked on');
}
exports.index = index;
function notFound(req, res) {
    const url = req.originalUrl.replace('/', '');
    return res.status(404).send(`${url} not found`);
}
exports.notFound = notFound;
