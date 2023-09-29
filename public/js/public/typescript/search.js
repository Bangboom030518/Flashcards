"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.open = void 0;
const Utilities = require("./utilities.js");
const search_bar_js_1 = require("./components/search-bar.js");
const header = document.querySelector('header');
function open() {
    window.location.href = '#searching';
    if (!document.querySelector('.search-bar')) {
        header.append(search_bar_js_1.searchBar);
        const searchInput = document.querySelector('.search-bar input');
        searchInput.addEventListener('blur', () => {
            close(searchInput);
        });
        searchInput.focus();
        searchInput.value = '';
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
