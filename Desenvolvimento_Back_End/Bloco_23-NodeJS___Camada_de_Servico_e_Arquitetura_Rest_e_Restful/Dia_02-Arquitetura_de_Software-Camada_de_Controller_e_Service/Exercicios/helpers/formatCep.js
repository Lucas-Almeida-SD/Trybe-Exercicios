const formatCep = (cep) => {
  return cep.split('-').join('');
};

module.exports = formatCep;
