"use strict";
exports.__esModule = true;
exports.updateSliderTooltips = exports.resizeTextAreas = void 0;
function resizeTextAreas(textAreas) {
    textAreas.forEach(function (textArea) {
        textArea.style.height = '';
        textArea.style.height = textArea.scrollHeight + 'px';
        textArea.addEventListener('input', function () {
            textArea.style.height = '';
            textArea.style.height = textArea.scrollHeight + 'px';
        });
    });
}
exports.resizeTextAreas = resizeTextAreas;
function updateSliderTooltips(rangeInputs) {
    rangeInputs.forEach(function (rangeInput) {
        var value = parseFloat(rangeInput.value);
        var max = parseFloat(rangeInput.max) || 100;
        var percentage = Math.round(value / max * 100);
        rangeInput.title = percentage + '%';
        rangeInput.addEventListener('change', function () {
            var value = parseFloat(rangeInput.value);
            var max = parseFloat(rangeInput.max) || 100;
            var percentage = Math.round(value / max * 100);
            rangeInput.title = percentage + '%';
        });
    });
}
exports.updateSliderTooltips = updateSliderTooltips;
