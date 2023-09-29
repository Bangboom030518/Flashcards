"use strict";
exports.__esModule = true;
var Popup = require("./popup.js");
var Search = require("./search.js");
var Events = require("./events.js");
var CreateCards = require("./create-cards.js");
var Url = require("./url.js");
var login_popup_js_1 = require("./components/login-popup.js");
var options_popup_js_1 = require("./components/options-popup.js");
var btnOpenLogin = document.querySelector('#open-login');
var btnSearch = document.querySelector('#btn-search');
var btnCreateCard = document.querySelector('#create-card');
var createForm = document.querySelector('#create-form');
var btnOptions = document.querySelectorAll('.btn-options');
var textAreas = document.querySelectorAll('textarea');
var rangeInputs = document.querySelectorAll('input[type=\'range\']');
Url.checkAll();
Events.resizeTextAreas(textAreas);
Events.updateSliderTooltips(rangeInputs);
if (window.location.href.includes('#searching'))
    Search.open();
btnOpenLogin.addEventListener('click', function () { return Popup.open(login_popup_js_1.loginPopup); });
btnOptions.forEach(function (btn) { return btn.addEventListener('click', function () { return Popup.open(options_popup_js_1.optionsPopup); }); });
btnSearch.addEventListener('click', Search.open);
btnSearch.addEventListener('focus', Search.open);
if (createForm)
    createForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var formElements = document.querySelectorAll('#create-form :is(input, textarea)');
        var terms = [];
        var definitions = [];
        formElements.forEach(function (formElement) {
            // response.push(formElement.name + ' = ' + formElement.value || 'No value submitted')
            if (formElement.name.includes('card-term'))
                terms.push(formElement.value);
            if (formElement.name.includes('card-definition'))
                definitions.push(formElement.value);
        });
        for (var index = 0; index < terms.length; index++) {
            var term = terms[index];
            var definition = definitions[index];
            document.querySelector('main').innerHTML += "\n        <section class='card-set'>\n            <h2>Flashcards</h2>\n            <form class='card-primary-outline'>\n                <button type='button' class='btn-options btn-primary-outline'>\n                    <img src='icons/options.svg' alt=\"options\">\n\n                    <p style='display: inline; inset: 0; margin: auto;'>Options</p>\n                </button>\n\n                <input type='checkbox' class='flip-checkbox' name='flip-checkbox' id='flip-checkbox-" + index + "' autofocus>\n\n                <label class='flip-container' for='flip-checkbox-" + index + "'>\n                    <div class='flip card-primary'>\n                        <label class='btn-star'>\n                            <input type='checkbox' class='toggle-star'>\n\n                            <img src='icons/star.svg' class='star' alt=''>\n\n                            <img src='icons/star-gold.svg' class='star-selected' alt=''>\n                        </label>\n\n                        <p>\n                            " + term + "\n                        </p>\n                    </div>\n\n                    <div class='flip card-primary'>\n                        <label class='btn-star'>\n                            <input type='checkbox' class='toggle-star'>\n                            <img src='icons/star.svg' class='star' alt=''>\n                            <img src='icons/star-gold.svg' class='star-selected' alt=''>\n                        </label>\n\n                        <p>\n                            " + definition + "\n                        </p>\n                    </div>\n                </label>\n\n                <fieldset class='btn-container'>\n                    <button class='btn-primary' type='submit'>Got it</button>\n                    <button class='btn-warn' type='reset'>Try again</button>\n                </fieldset>\n            </form>\n        </section>";
        }
        // document.body.innerHTML += response.join('<br>')
    });
document.addEventListener('keypress', function () {
    var formElements = document.querySelectorAll('#create-form :is(input, textarea)');
    formElements.forEach(function (formElement) {
        formElement.value = formElement.name;
    });
});
if (btnCreateCard)
    btnCreateCard.addEventListener('click', CreateCards.create);
