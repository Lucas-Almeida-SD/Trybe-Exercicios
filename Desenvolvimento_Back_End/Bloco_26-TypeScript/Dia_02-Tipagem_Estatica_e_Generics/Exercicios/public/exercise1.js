"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = exports.Direction = exports.Doors = exports.Color = void 0;
var Color;
(function (Color) {
    Color["preta"] = "preta";
    Color["branca"] = "branca";
    Color["vermelha"] = "vermelha";
    Color["prata"] = "prata";
})(Color = exports.Color || (exports.Color = {}));
var Doors;
(function (Doors) {
    Doors["door1"] = "porta 1";
    Doors["door2"] = "porta 2";
    Doors["door3"] = "porta 3";
    Doors["door4"] = "porta 4";
})(Doors = exports.Doors || (exports.Doors = {}));
var Direction;
(function (Direction) {
    Direction["left"] = "esquerda";
    Direction["right"] = "direita";
})(Direction = exports.Direction || (exports.Direction = {}));
class Car {
    constructor(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }
    honk() {
        console.log('Buzina acionada');
    }
    openTheDoor(door) {
        console.log(`A ${door} foi aberta`);
    }
    closeTheDoor(door) {
        console.log(`A ${door} foi fechada`);
    }
    turnOn() {
        console.log('O carro foi ligado');
    }
    turnOff() {
        console.log('O carro foi desligado');
    }
    speedUp() {
        console.log('O carro foi acelerado');
    }
    speedDown() {
        console.log('O carro foi desacelerado');
    }
    stop() {
        console.log('O carro foi parado');
    }
    turn(direction) {
        console.log(`Virar à ${direction}`);
    }
}
exports.Car = Car;
