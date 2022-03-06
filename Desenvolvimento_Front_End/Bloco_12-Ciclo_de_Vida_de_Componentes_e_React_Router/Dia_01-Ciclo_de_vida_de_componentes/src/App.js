import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      img: undefined,
      loading: true,
      name: '',
      doguinhos: [],
    };
    this.updateImg = this.updateImg.bind(this);
    this.getSavedDogATLocalStorage = this.getSavedDogATLocalStorage.bind(this);
  }

  componentDidMount() {
    const doguinhos = JSON.parse(localStorage.getItem('doguinhos'));
    if (doguinhos) {
      this.getSavedDogATLocalStorage(doguinhos);
    } else {
      this.updateImg();
    }
  }

  getSavedDogATLocalStorage(doguinhos) {
    const lastDogImg = doguinhos[doguinhos.length - 1].img;
    this.setState({ doguinhos, img: lastDogImg, loading: false });
  }

  showTheRace() {
    const { img } = this.state;
    const getRace = img.split('/')[4].split('-');
    const race = getRace.map((element) => (
      `${element[0].toUpperCase()}${element.slice(1)}`
    )).join(' ');
    alert(`Race: ${race}`);
  }

  updateImg() {
    const url = 'https://dog.ceo/api/breeds/image/random';
    try {
      this.setState({ loading: true }, async () => {
        const response = await fetch(url);
        const data = await response.json();
        const { message } = data;
        if (!message.includes('terrier')) {
          this.setState({ img: message, loading: false }, () =>
            this.showTheRace());
        } else {
          this.setState({ loading: false });
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  dogName({ target }) {
    const { value } = target;
    this.setState({ name: value });
  }

  saveDog() {
    const { img, name , doguinhos} = this.state;
    if (name !== '') {
      this.setState({ doguinhos: [...doguinhos, {img, name}], name: '' }, () => {
      const { doguinhos } = this.state;
      localStorage.setItem('doguinhos', JSON.stringify(doguinhos));
      alert('Salvo com sucesso!')
    });
    } else {
      alert('Dê um nome ao doguinho!')
    }
  }

  renderImg() {
    const { loading, img } = this.state;
    if (loading === true) {
      return <p>loading...</p>;
    }
    if (img) {
      return <img src={ img } alt="doguin" />;
    }
  }

  render() {
    const { name, doguinhos } = this.state;
    return (
      <section className='dog-section'>
        <div>
          <label>Nome do doguin: </label>
          <input type="text" value={ name } onChange={(event) => this.dogName(event)}/>
        </div>
        <button type="button" onClick={() => this.saveDog()}>Salvar</button>
        <div className='dog-img-div'>
          {this.renderImg()}
        </div>
        <button type="button" onClick={ this.updateImg }>Atualizar Imagem</button>
        <section className='saved-dog-section'>
          <h2>My Dogs</h2>
          {doguinhos.map((element) => {
            return (
              <figure key={element.name}>
                <img src={element.img} alt={element.name} />
                <figcaption>{element.name}</figcaption>
              </figure>
            );
          })}
        </section>
      </section>
    );
  }
}

export default App;
