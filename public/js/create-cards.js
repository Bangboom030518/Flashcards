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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.remove = exports.create = void 0;
var Events = require("./events.js");
var Utilities = require("./utilities.js");
var create_card_js_1 = require("./components/create-card.js");
// const form: HTMLFormElement = document.querySelector('#create-form')
var btnCreate = document.querySelector('#create-card');
var cardContainer = document.querySelector('#create-card-container');
function create() {
    var cards = document.querySelectorAll('.create-card');
    create_card_js_1.updateCount(cards.length + 1);
    create_card_js_1.createCard.style.animation = 'open .3s ease';
    create_card_js_1.createCard.style.boxShadow = '0 !important';
    cardContainer.append(create_card_js_1.createCard);
    create_card_js_1.createCard.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
    var textAreas = document.querySelectorAll("#" + create_card_js_1.createCard.id + " textarea");
    var btnDelete = document.querySelector("#" + create_card_js_1.createCard.id + " .btn-delete");
    btnDelete.addEventListener('click', function () { return remove(btnDelete.parentElement); });
    Events.resizeTextAreas(textAreas);
}
exports.create = create;
function remove(parentElement) {
    return __awaiter(this, void 0, void 0, function () {
        var time, lastCard;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    time = 300;
                    parentElement.style.animation = "close " + time + "ms ease";
                    lastCard = document.querySelector("#" + parentElement.id + " + .create-card") || btnCreate;
                    return [4 /*yield*/, Utilities.sleep(time)];
                case 1:
                    _a.sent();
                    parentElement.remove();
                    lastCard.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                    update();
                    return [2 /*return*/];
            }
        });
    });
}
exports.remove = remove;
function update() {
    var cards = document.querySelectorAll('.create-card');
    var cardHeadings = document.querySelectorAll('.create-card h3');
    var _loop_1 = function (index) {
        var count = index + 1;
        var heading = cardHeadings[index];
        var card_1 = cards[index];
        heading.innerText = count.toString();
        resetElementInfo(card_1, count);
        var cardInputs = document.querySelectorAll("#" + card_1.id + " :is(input, textarea)");
        cardInputs.forEach(function (input) {
            resetElementInfo(input, count);
        });
    };
    for (var index = 0; index < cards.length; index++) {
        _loop_1(index);
    }
    create_card_js_1.updateCount(cards.length + 1);
}
function resetElementInfo(element, count) {
    var id = element.id;
    id = id.split('-');
    id[2] = count.toString();
    id = id.join('-');
    element.id = id;
    if (element.getAttribute('name'))
        element.setAttribute('name', id);
}
