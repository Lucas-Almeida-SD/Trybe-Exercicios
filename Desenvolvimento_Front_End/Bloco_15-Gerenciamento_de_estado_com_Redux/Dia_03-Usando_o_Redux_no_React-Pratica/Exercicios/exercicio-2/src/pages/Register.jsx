import React from 'react';
import { Link } from 'react-router-dom';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: 0,
      email: '',
      isDisabled: true,
      alreadyRegistered: false,
    }
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, () => this.validate());
  };

  validate = () => {
    const { name, age, email } = this.state;
    const regexEmail = /\S+@\S+\.com/;
    this.setState({
      isDisabled: !(name.length >= 5 && parseInt(age) > 0 && regexEmail.test(email)), 
    })
  };

  registerCustomer = () => {
    const { name, age, email } = this.state;
    let registeredCustomers = JSON.parse(localStorage.getItem('registeredCustomers'));
    if (!registeredCustomers) { registeredCustomers = []; }
    const customerIsRegistered = registeredCustomers.some((e) => e.name === name);
    if (!customerIsRegistered) {
      registeredCustomers.push({ name, age, email });
      localStorage.setItem('registeredCustomers', JSON.stringify(registeredCustomers));
      this.setState({ name: '', age: 0, email: '', isDisabled: true,
        alreadyRegistered: false });
    } else {
      this.setState({ alreadyRegistered: true });
    }
  }

  render() {
    const { handleChange } = this;
    const { name, age, email, isDisabled, alreadyRegistered } = this.state;
    return (
      <section>
        <h2>Cadastre-se</h2>
        {(alreadyRegistered) && <h3>Cliente ja cadastrado!</h3>}
        <div>
          <label>Nome completo: </label>
          <input type="text" name="name" value={ name } onChange={ handleChange } />
        </div>
        <div>
          <label>Idade: </label>
          <input type="number" name="age" value={ age } onChange={ handleChange } />
        </div>
        <div>
          <label>Email: </label>
          <input type="email" name="email" value={ email } onChange={ handleChange } />
        </div>
        <button
          type="button"
          onClick={ this.registerCustomer }
          disabled={ isDisabled }
        >
          Cadastrar
        </button>
        <Link to="/registered_customers">
          <button type="button">Clientes cadastrados</button>
        </Link>
      </section>
    );
  }
}

export default Register;
