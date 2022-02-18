# Exercícios - Dia 2 - Componentes React

Nestes exercícios foram colocados em prática os conhecimentos obtidos no dia, nos quais foram sobre:

  - Criar componentes React;

  - Fazer uso de props ;

  - Fazer composição de componentes;

  - Criar múltiplos componentes dinamicamente.

  - Utilizar PropTypes para checar o tipo de uma prop no uso de um componente;

  - Utilizar PropTypes para garantir a presença de props obrigatórias no uso de um componente;

  - Utilizar PropTypes para checar que uma prop é um objeto de formato específico;

  - Utilizar PropTypes para garantir que uma prop é um array com elementos de um determinado tipo.

___

## Fixação
### Parte I

    import React from 'react';

    class Image extends React.Component {
      render() {
        return <img src={this.props.source} alt={this.props.alternativeText} />;
      }
    }

    export default Image;

Crie uma aplicação __React__ na sua máquina via `create-react-app`. Crie um arquivo `Image.js` no diretório `src` do projeto e copie para esse arquivo o código escrito acima. Uma vez feito isso tudo, responda:

1. Qual o nome do componente declarado acima?

2. Chame o componente `Image` , de forma que seja mostrada <a href='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg' target='_blink' title='Cute cat staring'>esta imagem</a>, ou o texto `Cute cat staring` , caso a imagem não consiga ser carregada.
    ___

### Parte II

    // arquivo Order.js
    import React from 'react';

    class Order extends React.Component {
      render() {
        const { user, product, price } = this.props.order;

        return (
          <div className="order">
            <p> {user} bought {product} for {price.value} {price.currency} </p>
          </div>
        );
      }
    }

    export default Order;

<br>

    // arquivo App.js, criado pelo create-react-app, modificado
    import React from 'react';
    import './App.css';
    import Order from './Order';

    class App extends React.Component {
      render() {
        const headphone = {
          id: 102,
          user: "cena@gmail.com",
          product: "Razer Headphone",
          price: {
            value: 99.99,
            currency: "dollars"
          }
        };

        const energyDrink = {
          id: 77,
          user: "cena@gmail.com",
          product: "Monster 500mL",
          price: {
            value: 9.99,
            currency: "dollars"
          }
        };

        return (
          <div className="App">
            <h1> Orders recently created </h1>
            {/*  adicione os componentes aqui */}
          </div>
        );
      }
    }

    export default App;

Crie os componentes acima dentro do diretório `src` do projeto para poder fazer o exercício a seguir.

Agora, responda ao seguinte, no que diz respeito à composição de componentes:
O que o componente `App` é em relação a `Order` ?

Complete o código acima de forma que os pedidos referentes aos produtos `headphone` e `energyDrink` sejam filhos de `App` .

___

## Exercícios

Você vai implementar de forma simplificada uma [Pokedex](https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9dex)!! Para os que não estão familiarizados com o universo `Pokemon` , a `Pokedex` é uma enciclopédia de todos os pokemons na natureza. Para o seu caso, a sua aplicação precisa mostrar todos os pokemons presentes no arquivo `data.js` mencionado acima.

Você pode usar a imaginação para estilizar a sua aplicação. Entretanto, é __obrigatório__ que você implemente __pelo menos__ estes dois componentes:

1. `Pokemon` : como o próprio nome diz, esse componente representa um pokemon. Esse componente recebe como entrada um objeto que contém informações referentes a um pokemon específico. Esse componente precisa retornar as seguintes informações obrigatórias para serem mostradas para quem usar a aplicação, essas informações devem ser validadas utilizando PropTypes:

    - nome do pokemon;

    - tipo do pokemon;

    - peso médio do pokemon, acompanhado da unidade de medida usada;

    - imagem do pokemon.

    ___

2. `Pokedex` : esse componente representa a enciclopédia de pokemons. Esse componente recebe como entrada uma lista de pokemons para serem mostrados na tela. Para cada um desses pokemons recebidos, `Pokedex` chama o componente `Pokemon` .

    Segue uma sugestão de implementação da aplicação:

    <img src='https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/front-end/react/components/my-pokedex-project-ea45ad91e83d132aa28598905106cbe2.gif' alt='Modelo de Pokedex'>