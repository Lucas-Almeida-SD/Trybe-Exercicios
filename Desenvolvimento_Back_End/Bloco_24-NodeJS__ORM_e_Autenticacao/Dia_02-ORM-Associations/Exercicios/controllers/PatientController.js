const PatientService = require('../services/PatientService');

const getAll = async (_req, res) => {
  try {
    const patients = await PatientService.getAll();

    res.status(200).json(patients);

  } catch(error) {
    res.status(500).json({ message: error.message });
  }
};

const create = async (req, res) => {
  const patientObject = req.body;

  try {
    const newPatient = await PatientService.create(patientObject);

    res.status(201).json({ message: 'New patient registered!' });
    
  } catch(error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getAll,
  create,
};
