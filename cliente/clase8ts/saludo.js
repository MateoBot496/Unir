"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = /** @class */ (function () {
    function Animal(edad) {
        if (edad === void 0) { edad = 1; }
        this.edad = edad;
    }
    Object.defineProperty(Animal.prototype, "Edad", {
        get: function () {
            return this.edad;
        },
        set: function (value) {
            if (value < 0) {
                throw new RangeError("La edad no puede ser negativa");
            }
            this.edad = value;
        },
        enumerable: false,
        configurable: true
    });
    Animal.prototype.roar = function () {
        console.log("Roar!");
        return;
    };
    Animal.prototype.toString = function () {
        return "Animal de ".concat(this.edad, " a\u00F1os");
    };
    return Animal;
}());
var gato = new Animal();
console.log(gato.toString());
console.log(gato.Edad);
gato.roar();
