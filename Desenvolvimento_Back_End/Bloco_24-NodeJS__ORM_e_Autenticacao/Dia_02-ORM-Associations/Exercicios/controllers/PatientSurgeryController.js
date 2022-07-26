const PatientSurgeryService = require('../services/PatientSurgeryService');

const getAll = async (req, res) => {
  const { includeDoctor } = req.query;

  try {
    const patients = await PatientSurgeryService.getAll(includeDoctor);

    res.status(200).json(patients);
    
  } catch(error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAll,
};
