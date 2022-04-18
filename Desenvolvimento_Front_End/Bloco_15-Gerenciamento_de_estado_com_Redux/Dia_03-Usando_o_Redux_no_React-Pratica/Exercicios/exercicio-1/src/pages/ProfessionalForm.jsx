import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../components/Input';
import { professionalAction } from '../redux/actions/actions';

class ProfessionalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resumo: '',
      cargo: '',
      descricao: '',
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
    const { professionalDispatch, history } = this.props;
    const { resumo, cargo, descricao } = this.state;
    professionalDispatch({ resumo, cargo, descricao });
    history.push('/formDisplay');
  }

  render() {
    const { handleChange, handleClick } = this;
    const { resumo, cargo, descricao, isDisabled } = this.state;
    return (
      <div>
        <form method="get">
          <fieldset>
            <legend>Informações Profissionais</legend>
            <label htmlFor="resumo">
              Resumo do currículo
              <textarea
                id="resumo"
                name="resumo"
                value={ resumo }
                onChange={ handleChange }
              />
            </label>
            <Input
              text="Cargo"
              name="cargo"
              value={ cargo }
              handleChange={ handleChange }
            />
            <label htmlFor="descricao">
              Descrição do cargo:
              <textarea
                id="descricao"
                name="descricao"
                value={ descricao }
                onChange={ handleChange }
              />
            </label>
            <button type="submit" onClick={ handleClick } disabled={ isDisabled }>
              Enviar
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

ProfessionalForm.propTypes = {
  professionalDispatch: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  professionalDispatch: (values) => dispatch(professionalAction(values)),
});

export default connect(null, mapDispatchToProps)(ProfessionalForm);
