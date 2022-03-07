import React from "react";
import EmploymentData from "./EmploymentData";
import PersonalData from "./PersonalData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: 'Acre',
      tipo: 'Casa',
      resumo: '',
      cargo: '',
      descricao: '',
      saveBtnDisabled: true,
      saveBtnClicked: false,
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value }, () => this.validateData());
  }

  validateData() {
    const { nome, email, cpf, endereco, cidade, estado, tipo } = this.state;
    const { resumo, cargo, descricao } = this.state;
    const condition1 = nome !== '' && email !== '' && cpf !== '' && endereco !== '';
    const condition2 = cidade !== '' && estado !== '' && tipo !== '';
    const condition3 = resumo !== '' && cargo !== '' && descricao !== '';
    if (condition1 && condition2 && condition3) {
      this.setState({ saveBtnDisabled: false });
    } else {
      this.setState({ saveBtnDisabled: true });
    }
  }

  saveBtn() {
    const { saveBtnClicked } = this.state;
    if (saveBtnClicked === false) {
      this.setState({ saveBtnClicked: true });
    }
  }

  clearBtn() {
    this.setState({
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: 'Acre',
      tipo: 'Casa',
      resumo: '',
      cargo: '',
      descricao: '',
      saveBtnDisabled: true,
      saveBtnClicked: false,
    });
  }

  renderInfo() {
    const { saveBtnClicked } = this.state;
    if (saveBtnClicked) {
      const { nome, email, cpf, endereco, cidade, estado, tipo } = this.state;
      const { resumo, cargo, descricao } = this.state;
      return (
        <section className="info">
          <p>Nome: {nome}</p>
          <p>Email: {email}</p>
          <p>CPF: {cpf}</p>
          <p>Endereço: {endereco}</p>
          <p>Cidade: {cidade}</p>
          <p>Estado: {estado}</p>
          <p>Tipo: {tipo}</p>
          <p>Resumo: {resumo}</p>
          <p>Cargo: {cargo}</p>
          <p>Descrição: {descricao}</p>
        </section>
      );
    }
  }

  render() {
    const { state, onChange } = this;
    const { saveBtnDisabled, saveBtnClicked } = this.state; 
    return (
      <section>
        <div>
          <PersonalData state={ state } onChange={ onChange } />
          <EmploymentData state={ state } onChange={ onChange } />
          <button type="submit" onClick={() => this.saveBtn()} disabled={saveBtnDisabled}>Salvar</button>
          <button type= "button" onClick={() => this.clearBtn()} disabled={ !saveBtnClicked }>Limpar</button>
        </div>
        {this.renderInfo()}
      </section>
    );
  }
}

export default App;
