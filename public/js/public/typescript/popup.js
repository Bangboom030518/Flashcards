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
exports.close = exports.open = void 0;
const Utilities = require("./utilities.js");
let exitPopupButton;
function open(element) {
    if (document.querySelector('.popup'))
        return;
    document.body.append(element);
    exitPopupButton = document.querySelector('.btn-close');
    document.body.classList.add('popup-opened');
    element.setAttribute('open', '');
    exitPopupButton === null || exitPopupButton === void 0 ? void 0 : exitPopupButton.addEventListener('click', close);
}
exports.open = open;
function close() {
    return __awaiter(this, void 0, void 0, function* () {
        exitPopupButton.removeEventListener('click', close);
        let parentElement = exitPopupButton.parentElement.parentElement;
        window.location.href = '#';
        parentElement.removeAttribute('open');
        document.body.classList.remove('popup-opened');
        yield Utilities.sleep(1000);
        parentElement.remove();
    });
}
exports.close = close;
