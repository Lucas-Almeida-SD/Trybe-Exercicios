import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../components/Input';
import estados from '../helpers/estados';
import { personalAction } from '../redux/actions/actions';

class PersonalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: 'Acre',
      isDisabled: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick(event) {
    event.preventDefault();
    const { personalDispatch, history } = this.props;
    const { nome, email, cpf, endereco, cidade, estado } = this.state;
    personalDispatch({ nome, email, cpf, endereco, cidade, estado });
    history.push('/professionalForm');
  }

  render() {
    const { handleChange, handleClick } = this;
    const {
      nome,
      email,
      cpf,
      endereco,
      cidade,
      estado,
      isDisabled,
    } = this.state;
    return (
      <div>
        <form method="get">
          <fieldset>
            <legend>Informações pessoais</legend>
            <Input
              text="Nome"
              name="nome"
              value={ nome }
              handleChange={ handleChange }
            />
            <Input
              text="Email"
              name="email"
              value={ email }
              handleChange={ handleChange }
            />
            <Input
              text="CPF"
              name="cpf"
              value={ cpf }
              handleChange={ handleChange }
            />
            <Input
              text="Endereço"
              name="endereco"
              value={ endereco }
              handleChange={ handleChange }
            />
            <Input
              text="Cidade"
              name="cidade"
              value={ cidade }
              handleChange={ handleChange }
            />
            <select name="estado" value={ estado } onChange={ handleChange }>
              {estados.map((e) => (
                <option key={ e }>{e}</option>
              ))}
            </select>
            <button type="submit" onClick={ handleClick } disabled={ isDisabled }>
              Enviar
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

PersonalForm.propTypes = {
  personalDispatch: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  personalDispatch: (values) => dispatch(personalAction(values)),
});

export default connect(null, mapDispatchToProps)(PersonalForm);
