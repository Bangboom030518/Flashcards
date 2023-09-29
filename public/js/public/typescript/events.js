"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSliderTooltips = exports.resizeTextAreas = void 0;
function resizeTextAreas(textAreas) {
    textAreas.forEach(textArea => {
        textArea.style.height = '';
        textArea.style.height = textArea.scrollHeight + 'px';
        textArea.addEventListener('input', () => {
            textArea.style.height = '';
            textArea.style.height = textArea.scrollHeight + 'px';
        });
    });
}
exports.resizeTextAreas = resizeTextAreas;
function updateSliderTooltips(rangeInputs) {
    rangeInputs.forEach(rangeInput => {
        const value = parseFloat(rangeInput.value);
        const max = parseFloat(rangeInput.max) || 100;
        const percentage = Math.round(value / max * 100);
        rangeInput.title = percentage + '%';
        rangeInput.addEventListener('change', () => {
            const value = parseFloat(rangeInput.value);
            const max = parseFloat(rangeInput.max) || 100;
            const percentage = Math.round(value / max * 100);
            rangeInput.title = percentage + '%';
        });
    });
}
exports.updateSliderTooltips = updateSliderTooltips;
