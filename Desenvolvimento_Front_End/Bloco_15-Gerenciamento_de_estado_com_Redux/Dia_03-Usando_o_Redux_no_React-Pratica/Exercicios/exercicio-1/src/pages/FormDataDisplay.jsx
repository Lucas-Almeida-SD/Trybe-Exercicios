import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FormDataDisplay extends React.Component {
  render() {
    const { personalInfo, professionalInfo } = this.props;
    const { nome, email, cpf, endereco, cidade, estado } = personalInfo;
    const { resumo, cargo, descricao } = professionalInfo;
    return (
      <div>
        <p>{`Nome: ${nome}`}</p>
        <p>{`Email: ${email}`}</p>
        <p>{`CPF:${cpf}`}</p>
        <p>{`Endereço: ${endereco}`}</p>
        <p>{`Cidade: ${cidade}`}</p>
        <p>{`Estado: ${estado}`}</p>
        <p>{`Resumo do currículo: ${resumo}`}</p>
        <p>{`Cargo: ${cargo}`}</p>
        <p>{`Descrição do cargo: ${descricao}`}</p>

      </div>
    );
  }
}

FormDataDisplay.propTypes = {
  personalInfo: PropTypes.shape({
    nome: PropTypes.string,
    email: PropTypes.string,
    cpf: PropTypes.string,
    endereco: PropTypes.string,
    cidade: PropTypes.string,
    estado: PropTypes.string,
  }),
  professionalInfo: PropTypes.shape({
    resumo: PropTypes.string,
    cargo: PropTypes.string,
    descricao: PropTypes.string,
  }),
}.isRequired;

const mapStateToProps = (state) => ({
  personalInfo: state.personalState,
  professionalInfo: state.professionalState,
});

export default connect(mapStateToProps)(FormDataDisplay);
