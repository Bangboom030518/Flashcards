"use strict";
exports.__esModule = true;
exports.sleep = exports.testFor = exports.isEmail = void 0;
function isEmail(value) {
    var tester = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return tester.test(value);
}
exports.isEmail = isEmail;
function testFor(searchString, string) {
    return string.indexOf(searchString) > -1;
}
exports.testFor = testFor;
function sleep(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time);
    });
}
exports.sleep = sleep;
