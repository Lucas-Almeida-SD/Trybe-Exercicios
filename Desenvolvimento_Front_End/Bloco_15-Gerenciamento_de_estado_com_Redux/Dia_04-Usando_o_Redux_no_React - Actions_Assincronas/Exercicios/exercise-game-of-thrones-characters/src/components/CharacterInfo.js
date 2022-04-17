import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// importe o connect do 'react-redux';

class CharacterInfo extends React.Component {
  render() {
    //faça a desestruturação das props aqui
    const { info: {loading, character,error} } = this.props;
    console.log(loading, character,error);
    if (!loading && character) {
      return (
        <ul>
          <li>Name: {character.name}</li>
          <li>Gender: {character.gender}</li>
          <li>Aliases: {character.aliases.map((alias, index) => <p key={`${alias}-${index}`}>{alias}</p>)}</li>
          <li>Books: {character.books.map((book, index) => <p key={`${book}-${index}`}>{book}</p>)}</li>
        </ul>
      )
    }
    if (error) { return <div>{error}</div>; }
    if (loading) { return <div>Loading...</div>; }
    return <div>Type a character name and click to search!</div>;
  }
};

// CharacterInfo.propTypes = {
//   info: PropTypes.object.shape({
//     isFetching: PropTypes.bool,
//     data: PropTypes.string,
//     error: PropTypes.string,
//   }),
// }.isRequired;

//mapeie o estado global para a propriedade da sua aplicação
const mapStateToProps = (state) => ({
  info: state.reducer,
})

// conecte este componente ao redux aqui
export default connect(mapStateToProps)(CharacterInfo);

