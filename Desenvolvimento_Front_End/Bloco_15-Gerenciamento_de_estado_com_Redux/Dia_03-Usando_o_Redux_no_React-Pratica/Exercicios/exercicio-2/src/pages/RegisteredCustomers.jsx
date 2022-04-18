import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class RegisteredCustomers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registeredCustomers: [],
      order: false,
    }
  }

  componentDidMount() {
    this.getRegisteredCustomers();
  }

  checkLogin = (email) => {
    if (email === '') { 
      return (<h2>Login não efetuado</h2>)
     }
    return (
      <>
        {this.renderRegisteredCustomers()}
        <Link to="/register"><button>Cadastrar</button></Link>
      </>
    );
  }

  getRegisteredCustomers = () => {
    const registeredCustomers = JSON.parse(localStorage.getItem('registeredCustomers'));
    this.setState({ registeredCustomers }); 
  }

  orderNames = () => {
    this.setState((state) => ({ order: !state.order }))
  }

  compareName = (next, previous) => {
    if (next.name > previous.name) { return 1; }
    if (next.name < previous.name) { return - 1; }
    return 0;
  }

  removeCustomer = (customer) => {
    let registeredCustomers = JSON.parse(localStorage.getItem('registeredCustomers'));
    registeredCustomers = registeredCustomers.filter((e) => e.name !== customer.name)
    localStorage.setItem('registeredCustomers', JSON.stringify(registeredCustomers));
    this.getRegisteredCustomers();
  }

  renderRegisteredCustomers = () => {
    const { order, registeredCustomers } = this.state;
    if (registeredCustomers.length > 0) {
      const newRegisteredCustomers = registeredCustomers.map((e) => e);
      if (order) { 
        newRegisteredCustomers.sort((next, previous) => this.compareName(next, previous));
      }
      return (
        <>
          <h2>Clientes Cadastrados</h2>
          <button type="button" onClick={ this.orderNames }>Filter</button>
          {newRegisteredCustomers.map((e) => (
            <div key={ e.name }>
              <p>{`Nome: ${e.name}`}</p>
              <p>{`Idade: ${e.age}`}</p>
              <p>{`Email: ${e.email}`}</p>
              <button type="button" onClick={ () => this.removeCustomer(e) }>X</button>
            </div>
          ))}
        </>
      );
    }
    return <h2>Nenhum cliente cadastrado</h2>
  }

  render() {
    const { email } = this.props;
    return (
      <section>
        {this.checkLogin(email)}
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.login.email,
})

export default connect(mapStateToProps)(RegisteredCustomers);
