"use strict";
exports.__esModule = true;
exports.open = void 0;
var Utilities = require("./utilities.js");
var search_bar_js_1 = require("./components/search-bar.js");
var header = document.querySelector('header');
function open() {
    window.location.href = '#searching';
    if (!document.querySelector('.search-bar')) {
        header.append(search_bar_js_1.searchBar);
        var searchInput_1 = document.querySelector('.search-bar input');
        searchInput_1.addEventListener('blur', function () {
            close(searchInput_1);
        });
        searchInput_1.focus();
        searchInput_1.value = '';
    }
    if (!(header.className.indexOf('search-bar-opened') > -1)) {
        header.classList.add('search-bar-opened');
    }
}
exports.open = open;
function close(searchInput) {
    if (searchInput.value)
        return;
    header.classList.remove('search-bar-opened');
    Utilities.sleep(100);
    search_bar_js_1.searchBar.remove();
    window.location.href = '#';
}
