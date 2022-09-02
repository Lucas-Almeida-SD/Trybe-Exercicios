// ./interfaces.ts
export interface IDriveVehicle {
  drive(): void;
}

export interface IFlyVehicle {
  fly(): void;
}

export interface IVehicle extends IDriveVehicle, IFlyVehicle { }