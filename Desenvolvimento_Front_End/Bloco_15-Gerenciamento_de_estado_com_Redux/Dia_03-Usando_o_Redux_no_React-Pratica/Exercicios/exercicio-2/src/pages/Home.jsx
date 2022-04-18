import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

class Home extends React.Component {
  render() {
    return (
      <section className="home-section">
        <Link to="/login"><button type="button">Login</button></Link>
      </section>
    );
  }
}

export default Home;
