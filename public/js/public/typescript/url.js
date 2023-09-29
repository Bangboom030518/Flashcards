"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkLogin = exports.checkSearch = exports.checkAll = void 0;
const Search = require("./search.js");
const Popup = require("./popup.js");
const login_popup_js_1 = require("./components/login-popup.js");
const allTests = [
    checkSearch,
    checkLogin
];
function checkAll() {
    allTests.forEach(test => test());
}
exports.checkAll = checkAll;
function checkSearch() {
    check('search', Search.open);
}
exports.checkSearch = checkSearch;
function checkLogin() {
    check('login', () => Popup.open(login_popup_js_1.loginPopup));
}
exports.checkLogin = checkLogin;
function check(text, action) {
    if (window.location.href.includes(text))
        action();
}
