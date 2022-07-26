const { Patient, Surgery } = require('../models');

const getAll = async (includeDoctor) => {
  const patients = await Patient.findAll({
    include: [
      {
        model: Surgery, as: 'surgeries', through: { attributes: [] }, attributes: (includeDoctor) ? {} : { exclude: ['doctor'] }
      }
    ]
  });

  return patients;
};

module.exports = {
  getAll,
};
