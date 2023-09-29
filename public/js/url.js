"use strict";
exports.__esModule = true;
exports.checkLogin = exports.checkSearch = exports.checkAll = void 0;
var Search = require("./search.js");
var Popup = require("./popup.js");
var login_popup_js_1 = require("./components/login-popup.js");
var allTests = [
    checkSearch,
    checkLogin
];
function checkAll() {
    allTests.forEach(function (test) { return test(); });
}
exports.checkAll = checkAll;
function checkSearch() {
    check('search', Search.open);
}
exports.checkSearch = checkSearch;
function checkLogin() {
    check('login', function () { return Popup.open(login_popup_js_1.loginPopup); });
}
exports.checkLogin = checkLogin;
function check(text, action) {
    if (window.location.href.includes(text))
        action();
}
