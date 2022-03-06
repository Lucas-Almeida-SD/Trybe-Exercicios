import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      img: undefined,
      loading: true,
      shouldUpdate: false,
    };
    this.updateImg = this.updateImg.bind(this);
  }

  componentDidMount() {
    this.updateImg();
  }

  shouldComponentUpdate() {
    const { shouldUpdate } = this.state;
    return shouldUpdate;
  }

  componentDidUpdate() {
    this.showTheRace();
  }

  showTheRace() {
    const { img } = this.state;
    const { message } = img;
    const getRace = message.split('/')[4].split('-');
    const race = getRace.map((element) => (
      `${element[0].toUpperCase()}${element.slice(1)}`
    )).join(' ');
    alert(race);
  }

  updateImg() {
    const url = 'https://dog.ceo/api/breeds/image/random';
    try {
      this.setState({ loading: true }, async () => {
        const response = await fetch(url);
        const data = await response.json();
        const { message } = data;
        localStorage.setItem('img', JSON.stringify(message));
        if (!message.includes('terrier')) {
          this.setState({ img: data, shouldUpdate: true });
        } else {
          this.setState({ shouldUpdate: false });
        }
        this.setState({ loading: false });
      });
    } catch (error) {
      console.log(error);
    }
  }

  renderImg() {
    const { loading, img } = this.state;
    if (loading === true) {
      return <p>loading...</p>;
    }
    if (img) {
      return <img src={ img.message } alt="doguin" />;
    }
  }

  render() {
    return (
      <section>
        <p>oii</p>
        {this.renderImg()}
        <button type="button" onClick={ this.updateImg }>Atualizar Imagem</button>
      </section>
    );
  }
}

export default App;
