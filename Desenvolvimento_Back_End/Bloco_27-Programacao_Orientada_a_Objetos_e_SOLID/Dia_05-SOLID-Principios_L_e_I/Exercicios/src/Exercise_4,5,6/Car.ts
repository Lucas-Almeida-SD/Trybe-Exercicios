import { IDriveVehicle } from "./interfaces";

export default class Car implements IDriveVehicle {
  drive(): void { console.log('Drive a car'); }
}