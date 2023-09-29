"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchBar = void 0;
const searchBar = document.createElement('div');
exports.searchBar = searchBar;
searchBar.innerHTML =
    `
<div class='input input-secondary'>
    <input type='text' name='search' id='search' autocomplete='on' required>
    <label for='search'>Search</label>
    <span></span>
</div>
`;
searchBar.classList.add('search-bar');
