import React from 'react';
import { connect } from 'react-redux';
import { fetchApi } from './actions/apiAction';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'reactjs',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderDate = this.renderDate.bind(this);
    this.renderSelect = this.renderSelect.bind(this);
    this.renderPosts = this.renderPosts.bind(this);
  }

  handleChange({ target: { value } }) {
    this.setState({ selected: value, firstLoad: true }, () => {
      const { selected } = this.state;
      return (selected !== 'Selecione') ? this.props.api(selected) : null;
    });
  }

  handleClick() {
    const { api } = this.props;
    const { selected } = this.state;
    api(selected);
  }

  renderDate() {
    const { data: { isFetching } } = this.props;
    const now = new Date();
    if (!isFetching) {
      return <h3>{`Last upload at ${now.toLocaleTimeString('pt-BR')}`}</h3>;
    }
  }

  renderSelect() {
    const { handleChange, handleClick } = this;
    const { data: { isFetching } } = this.props;
    const { selected } = this.state;
    if (!isFetching) {
      return (
        <>
          <div>
            <label>
              Selecione seu subreddit:
              <select value={ selected } onChange={ handleChange }>
                <option>reactjs</option>
                <option>frontend</option>
              </select>
            </label>
            <div>
              <button type="button" onClick={ handleClick }>Atualizar</button>
            </div>
          </div>
        </>
      )
    }
  }

  renderPosts() {
    const { data } = this.props;
    if (data.isFetching) { return <p>Carregando...</p> }
    if (data.error) { return <p>Ops, ocorreu um erro. Tente novamente!</p> }
    return (
      data.posts.map((e) => (
        <p key={e.data.title}>{e.data.title}</p>
      ))
    )
  }

  componentDidMount() {
    this.props.api('reactjs');
  }

  render() {
    const { renderSelect, renderPosts, renderDate} = this;
    const { selected } = this.state;
    return (
      <div className="App">
        <h1>Reddit Posts</h1>
        <h2>{`Selecionado: ${selected}`}</h2>
        {renderDate()}
        {renderSelect()}
        <div>
          {renderPosts()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.reducer,
});

const mapDispatchToProps = (dispatch) => ({
  api: (query) => dispatch(fetchApi(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
