import { PERSONAL_FORM, PROFESSIONAL_FORM } from '../actions/actions';

const INNITIAL_STATE = {
  personalState: {
    nome: '',
    email: '',
    cpf: '',
    endereco: '',
    cidade: '',
    estado: 'Acre',
  },
  professionalState: {
    resumo: '',
    cargo: '',
    descricao: '',
  },
};

const reducer = (state = INNITIAL_STATE, action) => {
  switch (action.type) {
  case PERSONAL_FORM:
    return {
      ...state,
      personalState: action.values,
    };
  case PROFESSIONAL_FORM:
    return {
      ...state,
      professionalState: action.values,
    };
  default:
    return state;
  }
};

export default reducer;
