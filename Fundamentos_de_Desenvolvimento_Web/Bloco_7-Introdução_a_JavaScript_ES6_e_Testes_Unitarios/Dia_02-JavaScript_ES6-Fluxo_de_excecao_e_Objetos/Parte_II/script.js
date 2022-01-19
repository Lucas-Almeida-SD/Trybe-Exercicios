const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const generalInfo = Object.values(order);
  const deliveryTo = generalInfo[3]['delivery']['deliveryPerson'];
  const clientName = generalInfo[0];
  const phoneNumber = generalInfo[1]
  const street = generalInfo[2]['street'];
  const number = generalInfo[2]['number'];
  const apartment = generalInfo[2]['apartment'];
  const text = `Olá ${deliveryTo}, entrega para ${clientName}, Telefone: ${phoneNumber}, R. ${street}, Nº: ${number}, AP: ${apartment}.`;
  return text
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  order['name'] = 'Luiz Silva';
  order.payment.total = '50';
  const generalInfo = Object.values(order);
  const clientNumebr = Object.values(generalInfo)[0];
  const pizzas = Object.keys(generalInfo[3]['pizza']);
  const drinks = Object.values(generalInfo[3]['drinks']['coke']);
  const payment = generalInfo[4]['total'];
  const text = `Olá ${clientNumebr}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks[0]} é R$ ${payment},00.`
  console.log(text);
  return text
}

orderModifier(order);
