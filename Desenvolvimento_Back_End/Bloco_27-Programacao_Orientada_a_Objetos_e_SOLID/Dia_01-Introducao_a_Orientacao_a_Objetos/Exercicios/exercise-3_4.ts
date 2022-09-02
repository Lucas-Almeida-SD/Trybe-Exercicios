class Client {
  constructor(public clientName: string) {}
}

class OrderItem {
  constructor(public orderName: string, public price: number) {}
}

class Order {
  private client: Client;
  private orderItem: OrderItem[];
  private payment: 'débito' | 'crédito' | 'dinheiro';
  private discount?: number;

  constructor(
    client: Client, 
    orderItem: OrderItem[],
    payment: 'débito' | 'crédito' | 'dinheiro',
    discount?: number
    ) {
      this.client = client;
      this.orderItem = orderItem;
      this.payment = payment;
      this.discount = discount;
  }

  totalWithoutDiscount() {
    return this.orderItem.reduce((acc, item) => acc + item.price, 0);
  }

  totalWithDiscount() {
    if (this.discount) {
      const total = this.totalWithoutDiscount() - (this.totalWithoutDiscount() * this.discount);
      return total.toFixed(2);
    }

    return this.totalWithoutDiscount();
  }
}
