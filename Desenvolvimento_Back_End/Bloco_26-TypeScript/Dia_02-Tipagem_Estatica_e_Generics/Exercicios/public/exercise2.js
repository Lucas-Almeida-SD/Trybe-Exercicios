"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exercise1_1 = require("./exercise1");
const car = new exercise1_1.Car('volkswagen', exercise1_1.Color.prata, 4);
car.turnOn();
car.speedUp();
car.turn(exercise1_1.Direction.left);
car.turn(exercise1_1.Direction.right);
car.turn(exercise1_1.Direction.right);
car.speedDown();
car.stop();
car.openTheDoor(exercise1_1.Doors.door4);
car.closeTheDoor(exercise1_1.Doors.door4);
car.speedUp();
car.turn(exercise1_1.Direction.right);
car.turn(exercise1_1.Direction.left);
car.turn(exercise1_1.Direction.right);
car.speedDown();
car.stop();
car.openTheDoor(exercise1_1.Doors.door4);
car.closeTheDoor(exercise1_1.Doors.door4);
