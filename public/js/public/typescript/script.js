"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Popup = require("./popup.js");
const Search = require("./search.js");
const Events = require("./events.js");
const CreateCards = require("./create-cards.js");
const Url = require("./url.js");
const login_popup_js_1 = require("./components/login-popup.js");
const options_popup_js_1 = require("./components/options-popup.js");
const btnOpenLogin = document.querySelector('#open-login');
const btnSearch = document.querySelector('#btn-search');
const btnCreateCard = document.querySelector('#create-card');
const createForm = document.querySelector('#create-form');
const btnOptions = document.querySelectorAll('.btn-options');
const textAreas = document.querySelectorAll('textarea');
const rangeInputs = document.querySelectorAll('input[type=\'range\']');
Url.checkAll();
Events.resizeTextAreas(textAreas);
Events.updateSliderTooltips(rangeInputs);
if (window.location.href.includes('#searching'))
    Search.open();
btnOpenLogin.addEventListener('click', () => Popup.open(login_popup_js_1.loginPopup));
btnOptions.forEach(btn => btn.addEventListener('click', () => Popup.open(options_popup_js_1.optionsPopup)));
btnSearch.addEventListener('click', Search.open);
btnSearch.addEventListener('focus', Search.open);
if (createForm)
    createForm.addEventListener('submit', e => {
        e.preventDefault();
        const formElements = document.querySelectorAll('#create-form :is(input, textarea)');
        const terms = [];
        const definitions = [];
        formElements.forEach(formElement => {
            if (formElement.name.includes('card-term'))
                terms.push(formElement.value);
            if (formElement.name.includes('card-definition'))
                definitions.push(formElement.value);
        });
        for (let index = 0; index < terms.length; index++) {
            const term = terms[index];
            const definition = definitions[index];
            document.querySelector('main').innerHTML += `
        <section class='card-set'>
            <h2>Flashcards</h2>
            <form class='card-primary-outline'>
                <button type='button' class='btn-options btn-primary-outline'>
                    <img src='icons/options.svg' alt="options">

                    <p style='display: inline; inset: 0; margin: auto;'>Options</p>
                </button>

                <input type='checkbox' class='flip-checkbox' name='flip-checkbox' id='flip-checkbox-${index}' autofocus>

                <label class='flip-container' for='flip-checkbox-${index}'>
                    <div class='flip card-primary'>
                        <label class='btn-star'>
                            <input type='checkbox' class='toggle-star'>

                            <img src='icons/star.svg' class='star' alt=''>

                            <img src='icons/star-gold.svg' class='star-selected' alt=''>
                        </label>

                        <p>
                            ${term}
                        </p>
                    </div>

                    <div class='flip card-primary'>
                        <label class='btn-star'>
                            <input type='checkbox' class='toggle-star'>
                            <img src='icons/star.svg' class='star' alt=''>
                            <img src='icons/star-gold.svg' class='star-selected' alt=''>
                        </label>

                        <p>
                            ${definition}
                        </p>
                    </div>
                </label>

                <fieldset class='btn-container'>
                    <button class='btn-primary' type='submit'>Got it</button>
                    <button class='btn-warn' type='reset'>Try again</button>
                </fieldset>
            </form>
        </section>`;
        }
    });
document.addEventListener('keypress', () => {
    const formElements = document.querySelectorAll('#create-form :is(input, textarea)');
    formElements.forEach(formElement => {
        formElement.value = formElement.name;
    });
});
if (btnCreateCard)
    btnCreateCard.addEventListener('click', CreateCards.create);
