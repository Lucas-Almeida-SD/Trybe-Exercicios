import { Person, Student, Teacher, Subject } from './exercise-1_2_3_4';
import { validateOrderItem, validateOrder } from './validations/validations';

class OrderItem {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    const result = validateOrderItem(name, price);
    if (typeof result === 'boolean') {
      this.name = name;
      this.price = price;
    } else {
      throw new Error(result);
    }
  }
}

class Order {
  client: Person;
  items: OrderItem[];
  paymentMethod: 'cartão' | 'dinheiro' | 'vale';
  discount: number;

  constructor(
    client: Person,
    items: OrderItem[],
    paymentMethod: 'cartão' | 'dinheiro' | 'vale',
    discount: number,
  ) {
    const result = validateOrder(items, discount);
    if (typeof result === 'boolean') {
      this.client = client;
      this.items = items;
      this.paymentMethod = paymentMethod;
      this.discount = discount;
    } else {
      throw new Error(result);
    }
  }
}

const student1 = new Student('Maria', '11/03/1997', [8], [6, 7]);

const subject1 = new Subject('Inglês');
const teacher1 = new Teacher('Jean', '04/06/1975', 3000, subject1, '17/05/2012');

const orderItem1 = new OrderItem('coxinha', 3.99);
const orderItem2 = new OrderItem('saltene', 4.99);
const orderItem3 = new OrderItem('pastel', 5.99);

const order1 = new Order(student1, [orderItem1], 'cartão', 0.5);
const order2 = new Order(teacher1, [orderItem2, orderItem3], 'vale', 0.7);


console.log(order1);
console.log(order2);


