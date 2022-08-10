export type Slices = 4 | 6 | 8;

export interface Pizza {
  flavor: string,
  slices: Slices,
};

type CommonPizzaFlavors = 'Calabresa' | 'Frango' | 'Pepperoni';
type VegetarianPizzaFlavors = 'Marguerita' | 'Palmito' | 'Cogumelo';
type SweetPizzaFlavors = 'Nutela' | 'Goiabada com Queijo' | 'Marshmallow';

interface CommonPizza extends Pizza {
  flavor: CommonPizzaFlavors,
  slices: Slices,
};

interface VegetarianPizza extends Pizza {
  flavor: VegetarianPizzaFlavors,
  slices: Slices,
};

interface SweetPizza extends Pizza {
  flavor: SweetPizzaFlavors,
  slices: 4,
};

const calabresa: CommonPizza = {
  flavor: "Calabresa",
  slices: 4
};

const frango: CommonPizza = {
  flavor: "Frango",
  slices: 6
};

const pepperoni: CommonPizza = {
  flavor: "Pepperoni",
  slices: 8
};

const marguerita: VegetarianPizza = {
  flavor: "Marguerita",
  slices: 8
};

const cogumelo: VegetarianPizza = {
  flavor: "Cogumelo",
  slices: 4
};

const nutela: SweetPizza = {
  flavor: "Nutela",
  slices: 4
};