import { Car, Color, Direction, Doors } from "./exercise1";

const car = new Car('volkswagen', Color.prata, 4);

car.turnOn();
car.speedUp();
car.turn(Direction.left);
car.turn(Direction.right);
car.turn(Direction.right);
car.speedDown();
car.stop();
car.openTheDoor(Doors.door4);
car.closeTheDoor(Doors.door4);
car.speedUp();
car.turn(Direction.right);
car.turn(Direction.left);
car.turn(Direction.right);
car.speedDown();
car.stop();
car.openTheDoor(Doors.door4);
car.closeTheDoor(Doors.door4);