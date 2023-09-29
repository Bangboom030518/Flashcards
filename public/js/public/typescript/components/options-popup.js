"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optionsPopup = void 0;
const optionsPopup = document.createElement('dialog');
exports.optionsPopup = optionsPopup;
optionsPopup.innerHTML =
    `
<div class="scroll-container">
    <button class='btn-close'>
        <img src='icons/close.svg' alt='close'>
    </button>
    <br>
    <h2>Options</h2>
    <br>
    <form method='POST'>
        <h3>Study</h3>
        <br>
        <fieldset class='radio-list'>
            <div class='radio-container'>
                <label for='option1'>All</label>

                <label class='radio-button'>
                    <input type='radio' name='answer' id='study-all' value='all'>

                    <span class='checkmark'></span>
                </label>
            </div>

            <div class='radio-container'>
                <label for='option2'>Starred</label>

                <label class='radio-button'>
                    <input type='radio' name='answer' id='study-starred' value='starred'>

                    <span class='checkmark'></span>
                </label>
            </div>
        </fieldset>
        <br>
        <fieldset class='btn-container'>
            <button type='submit' class='btn-success'>Update</button>
            <button class='btn-warn' type='reset'>Cancel</button>
        </fieldset>
    </form>`;
optionsPopup.setAttribute('id', 'options-popup');
optionsPopup.setAttribute('class', 'popup');
