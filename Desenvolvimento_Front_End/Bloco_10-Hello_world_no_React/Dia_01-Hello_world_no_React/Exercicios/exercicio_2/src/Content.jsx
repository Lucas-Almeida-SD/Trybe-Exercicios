import React, { Component } from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends Component {
  render() {
    const array = conteudos.map((element, index) => {
      return (
      <li key={index} className="list-item">
        <p key={`${index}-1`} className="paragraph">O conteudo é {element.conteudo}</p>
        <p key={`${index}-2`} className="paragraph">Status: {element.status}</p>
        <p key={`${index}-3`} className="paragraph">Bloco: {element.bloco}</p>
      </li>
      )
    });
    return <ul className="content">{array}</ul>;
  }
}

export default Content;