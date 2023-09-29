"use strict";
exports.__esModule = true;
exports.updateCount = exports.createCard = void 0;
var count;
var createCard;
exports.createCard = createCard;
function updateCount(value) {
    count = value;
    updateHTML();
}
exports.updateCount = updateCount;
function updateHTML() {
    exports.createCard = createCard = document.createElement('fieldset');
    createCard.innerHTML =
        "\n    <button type='button' class='btn-delete'>\n        <img src='icons/delete.svg' alt=''>\n    </button>\n    <h3>" + count + "</h3>\n    <div class='textarea textarea-secondary'>\n        <textarea type='text' autocomplete='off' required name='card-term-" + count + "' id='card-term-" + count + "' class='text-input card-term'></textarea>\n        <label for='card-name'>Term</label>\n        <span></span>\n    </div>\n    <div class='textarea textarea-secondary'>\n        <textarea type='text' autocomplete='off' required name='card-definition-" + count + "' id='card-definition-" + count + "' class='text-input card-definition'></textarea>\n        <label for='card-definition'>Definition</label>\n        <span></span>\n    </div>\n    ";
    createCard.setAttribute('class', 'card-primary create-card');
    createCard.setAttribute('id', 'create-card-' + count);
}
