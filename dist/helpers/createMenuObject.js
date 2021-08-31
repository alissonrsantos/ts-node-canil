"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMenuObject = void 0;
function createMenuObject(activeMenu) {
    let options = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    };
    if (activeMenu !== '') {
        options[activeMenu] = true;
    }
    return options;
}
exports.createMenuObject = createMenuObject;
