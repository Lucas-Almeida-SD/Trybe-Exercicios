const connection = require('../helpers/connection');

const getDataByCep = async (cep) => {
  const query = `SELECT * FROM cep_lookup.ceps WHERE cep = ?;`;

  const [data] = await connection.execute(query, [cep]);

  return data[0];
}


const addCep = async (cep, logradouro, bairro, localidade, uf) => {
  const values = [cep, logradouro, bairro, localidade, uf]
  const query = `
  INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf) 
  VALUES (?, ?, ?, ?, ?);
  `;
  
  await connection.execute(query, values);
}

const getDataByCep2 = async (cep) => {
  const query = `
  SELECT cep, logradouro, bairro, localidade, uf
  FROM cep_lookup2.ceps AS ceps
  INNER JOIN cep_lookup2.bairros AS bairros
  ON ceps.bairro_id = bairros.id
  WHERE cep = ?`

  const [data] = await connection.execute(query, [cep]);

  return data[0];
}

const getBairro2 = async (bairro, localidade, uf) => {
  const values = [bairro, localidade, uf];

  const query = `
    SELECT * FROM cep_lookup2.bairros
    WHERE bairro = ? AND localidade = ? AND uf = ?`;

  const [bairroInfo] = await connection.execute(query, values);

  return bairroInfo[0];
}

const addBairros2 = async (bairro, localidade, uf) => {
  const values = [bairro, localidade, uf]

  const query = `
    INSERT INTO cep_lookup2.bairros (bairro, localidade, uf) 
    VALUES (?, ?, ?);
  `;

  const newBairro = await connection.execute(query, values);

  return newBairro;
}

const addCep2 = async (cep, logradouro, bairro_id) => {
  const values = [cep, logradouro, bairro_id]

  const query = `
    INSERT INTO cep_lookup2.ceps (cep, logradouro, bairro_id)
    VALUES (?, ?, ?);
  `;

  await connection.execute(query, values);
}

module.exports = {
  getDataByCep,
  addCep,
  getDataByCep2,
  getBairro2,
  addBairros2,
  addCep2,
};