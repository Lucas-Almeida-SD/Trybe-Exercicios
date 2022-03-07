import React from "react";
import Input from "./Input";
import RadioInput from "./RadioInput";
import Select from "./Select";

class PersonalDataFieldset extends React.Component {
  render() {
    const { state, onChange } = this.props;
    const {  nome, email, cpf, endereco, cidade, estado, tipo } = state;
    return (
      <fieldset>
        <legend>Dados Pessoais</legend>
        <section>
          <Input type="text" value={ nome } name="nome" maxLength="40" text="Nome" onChange={ onChange } />
          <Input type="text" value={ email } name="email" maxLength="50" text="Email" onChange={ onChange } />
          <Input type="text" value={ cpf } name="cpf" maxLength="11" text="CPF" onChange={ onChange } />
          <Input type="text" value={ endereco } name="endereco" maxLength="200" text="Endereço" onChange={ onChange } />
          <Input type="text" value={ cidade } name="cidade" maxLength="28" text="Cidade" onChange={ onChange } />
          <Select value={ estado } onChange={ onChange } />
          <div>
            <label>Tipo: </label>
            <RadioInput value="Casa" tipo={ tipo } text="Casa" onChange={ onChange } />
            <RadioInput value="Apartamento" tipo={ tipo } text="Apartamento" onChange={ onChange } />
          </div>
        </section>
      </fieldset>
    )
  }
}

export default PersonalDataFieldset;