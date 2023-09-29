"use strict";
exports.__esModule = true;
exports.searchBar = void 0;
var searchBar = document.createElement('div');
exports.searchBar = searchBar;
searchBar.innerHTML =
    "\n<div class='input input-secondary'>\n    <input type='text' name='search' id='search' autocomplete='on' required>\n    <label for='search'>Search</label>\n    <span></span>\n</div>\n";
searchBar.classList.add('search-bar');
