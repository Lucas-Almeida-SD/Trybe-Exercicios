export enum Color {
  preta = 'preta',
  branca = 'branca',
  vermelha = 'vermelha',
  prata = 'prata'
}

export enum Doors {
  door1 = 'porta 1',
  door2 = 'porta 2',
  door3 = 'porta 3',
  door4 = 'porta 4',
}

export enum Direction {
  left = 'esquerda',
  right = 'direita',
}

export class Car {
  brand: string;
  color: Color;
  doors: number;

  constructor(brand: string, color: Color, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk(): void {
    console.log('Buzina acionada');
  }

  openTheDoor(door: Doors): void {
    console.log(`A ${door} foi aberta`);
  }

  closeTheDoor(door: Doors): void {
    console.log(`A ${door} foi fechada`);
  }

  turnOn(): void {
    console.log('O carro foi ligado');
  }

  turnOff(): void {
    console.log('O carro foi desligado');
  }

  speedUp(): void {
    console.log('O carro foi acelerado');
  }

  speedDown(): void {
    console.log('O carro foi desacelerado');
  }

  stop(): void {
    console.log('O carro foi parado');
  }

  turn(direction: Direction): void {
    console.log(`Virar à ${direction}`);
  }
}