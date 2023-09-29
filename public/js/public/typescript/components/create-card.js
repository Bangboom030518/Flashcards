"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCount = exports.createCard = void 0;
let count;
let createCard;
exports.createCard = createCard;
function updateCount(value) {
    count = value;
    updateHTML();
}
exports.updateCount = updateCount;
function updateHTML() {
    exports.createCard = createCard = document.createElement('fieldset');
    createCard.innerHTML =
        `
    <button type='button' class='btn-delete'>
        <img src='icons/delete.svg' alt=''>
    </button>
    <h3>${count}</h3>
    <div class='textarea textarea-secondary'>
        <textarea type='text' autocomplete='off' required name='card-term-${count}' id='card-term-${count}' class='text-input card-term'></textarea>
        <label for='card-name'>Term</label>
        <span></span>
    </div>
    <div class='textarea textarea-secondary'>
        <textarea type='text' autocomplete='off' required name='card-definition-${count}' id='card-definition-${count}' class='text-input card-definition'></textarea>
        <label for='card-definition'>Definition</label>
        <span></span>
    </div>
    `;
    createCard.setAttribute('class', 'card-primary create-card');
    createCard.setAttribute('id', 'create-card-' + count);
}
