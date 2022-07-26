const { Patient, Plan } = require('../models');

const getAll = async () => {
  const patients = await Patient.findAll({
    include: { model: Plan, as: 'plan' }
  });

  return patients;
};

const create = async (patientObject) => {
  const newPatient = await Patient.create(patientObject);

  return newPatient;
}

module.exports = {
  getAll,
  create,
};
