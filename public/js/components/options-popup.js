"use strict";
exports.__esModule = true;
exports.optionsPopup = void 0;
var optionsPopup = document.createElement('dialog');
exports.optionsPopup = optionsPopup;
optionsPopup.innerHTML =
    "\n<div class=\"scroll-container\">\n    <button class='btn-close'>\n        <img src='icons/close.svg' alt='close'>\n    </button>\n    <br>\n    <h2>Options</h2>\n    <br>\n    <form method='POST'>\n        <h3>Study</h3>\n        <br>\n        <fieldset class='radio-list'>\n            <div class='radio-container'>\n                <label for='option1'>All</label>\n\n                <label class='radio-button'>\n                    <input type='radio' name='answer' id='study-all' value='all'>\n\n                    <span class='checkmark'></span>\n                </label>\n            </div>\n\n            <div class='radio-container'>\n                <label for='option2'>Starred</label>\n\n                <label class='radio-button'>\n                    <input type='radio' name='answer' id='study-starred' value='starred'>\n\n                    <span class='checkmark'></span>\n                </label>\n            </div>\n        </fieldset>\n        <br>\n        <fieldset class='btn-container'>\n            <button type='submit' class='btn-success'>Update</button>\n            <button class='btn-warn' type='reset'>Cancel</button>\n        </fieldset>\n    </form>";
optionsPopup.setAttribute('id', 'options-popup');
optionsPopup.setAttribute('class', 'popup');
