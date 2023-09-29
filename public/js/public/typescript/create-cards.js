"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.create = void 0;
const Events = require("./events.js");
const Utilities = require("./utilities.js");
const create_card_js_1 = require("./components/create-card.js");
const btnCreate = document.querySelector('#create-card');
const cardContainer = document.querySelector('#create-card-container');
function create() {
    const cards = document.querySelectorAll('.create-card');
    create_card_js_1.updateCount(cards.length + 1);
    create_card_js_1.createCard.style.animation = 'open .3s ease';
    create_card_js_1.createCard.style.boxShadow = '0 !important';
    cardContainer.append(create_card_js_1.createCard);
    create_card_js_1.createCard.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
    const textAreas = document.querySelectorAll(`#${create_card_js_1.createCard.id} textarea`);
    const btnDelete = document.querySelector(`#${create_card_js_1.createCard.id} .btn-delete`);
    btnDelete.addEventListener('click', () => remove(btnDelete.parentElement));
    Events.resizeTextAreas(textAreas);
}
exports.create = create;
function remove(parentElement) {
    return __awaiter(this, void 0, void 0, function* () {
        const time = 300;
        parentElement.style.animation = `close ${time}ms ease`;
        const lastCard = document.querySelector(`#${parentElement.id} + .create-card`) || btnCreate;
        yield Utilities.sleep(time);
        parentElement.remove();
        lastCard.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
        update();
    });
}
exports.remove = remove;
function update() {
    const cards = document.querySelectorAll('.create-card');
    const cardHeadings = document.querySelectorAll('.create-card h3');
    for (let index = 0; index < cards.length; index++) {
        const count = index + 1;
        const heading = cardHeadings[index];
        const card = cards[index];
        heading.innerText = count.toString();
        resetElementInfo(card, count);
        const cardInputs = document.querySelectorAll(`#${card.id} :is(input, textarea)`);
        cardInputs.forEach(input => {
            resetElementInfo(input, count);
        });
    }
    create_card_js_1.updateCount(cards.length + 1);
}
function resetElementInfo(element, count) {
    let id = element.id;
    id = id.split('-');
    id[2] = count.toString();
    id = id.join('-');
    element.id = id;
    if (element.getAttribute('name'))
        element.setAttribute('name', id);
}
