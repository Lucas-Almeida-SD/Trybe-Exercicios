import React from 'react';
import { connect } from 'react-redux';
import { actionLogin } from '../redux/actions';
import './login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    }
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, () => this.validate())
  }

  handleClick = () => {
    const { login, history } = this.props;
    const { email, password } = this.state;
    login({ email, password });
    history.push('/registered_customers')
  }

  validate = () => {
    const { email, password } = this.state;
    const regexEmail = /\S+@\S+\.com/;
    const condition = regexEmail.test(email) && password.length >= 6;
    this.setState({ isDisabled: !condition })
  }

  render() {
    const { email, password, isDisabled } = this.state;
    return (
      <section className="login-section">
        <form method="get">
          <label htmlFor="email">
            <input
              type="email"
              id="email"
              name="email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              id="password"
              name="password"
              value={ password }
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            onClick={ this.handleClick }
            disabled={ isDisabled }
          >
            Entrar
          </button>
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (state) => dispatch(actionLogin(state)),
})

export default connect(null, mapDispatchToProps)(Login);
