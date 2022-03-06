import React from "react";
import './NotFound.css';

class NotFound extends React.Component {
  render() {
    const src = 'https://media3.giphy.com/media/U2nN0ridM4lXy/200.gif'
    return (
      <section className="page-not-found">
        <p>Page request not found</p>
        <img src={src} alt="Crazy pikachu" />
      </section>
    );
  }
}

export default NotFound;
