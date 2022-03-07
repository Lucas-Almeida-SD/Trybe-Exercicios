import React from "react";
import Input from "./Input";
import Textarea from "./Textarea";

class EmploymentData extends React.Component {
  render() {
    const { state, onChange } = this.props;
    const { resumo,cargo, descricao } = state;
    return (
      <fieldset>
        <legend>Dados do Último Emprego</legend>
        <Textarea
          text="Resumo"
          value={resumo}
          name="resumo"
          rows="7"
          cols="30"
          maxLength="1000"
          onChange={onChange}
        />
        <Textarea
          text="Cargo"
          value={cargo}
          name="cargo"
          rows="2"
          cols="30"
          maxLength="40"
          onChange={onChange}
        />
        <Input
          type="text"
          value={descricao}
          name="descricao"
          maxLength="500"
          text="Descrição do Cargo"
          onChange={onChange}
        />
      </fieldset>
    );
  }
}

export default EmploymentData;