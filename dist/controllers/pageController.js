"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fishes = exports.cats = exports.dogs = exports.home = void 0;
const createMenuObject_1 = require("../helpers/createMenuObject");
const Pet = __importStar(require("../models/Pet"));
function home(request, response) {
    const petList = Pet.getAllPets();
    response.render('pages/index', {
        menu: (0, createMenuObject_1.createMenuObject)('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg',
        },
        petList
    });
}
exports.home = home;
function dogs(request, response) {
    const dogs = Pet.getPetType('dog');
    response.render('pages/index', {
        menu: (0, createMenuObject_1.createMenuObject)('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        petList: dogs
    });
}
exports.dogs = dogs;
function cats(request, response) {
    const cats = Pet.getPetType('cat');
    response.render('pages/index', {
        menu: (0, createMenuObject_1.createMenuObject)('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        petList: cats
    });
}
exports.cats = cats;
function fishes(request, response) {
    const fishes = Pet.getPetType('fish');
    response.render('pages/index', {
        menu: (0, createMenuObject_1.createMenuObject)('fish'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        petList: fishes
    });
}
exports.fishes = fishes;
