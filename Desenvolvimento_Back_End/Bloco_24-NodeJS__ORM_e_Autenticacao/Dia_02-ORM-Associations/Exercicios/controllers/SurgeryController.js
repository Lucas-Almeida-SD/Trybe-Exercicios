const SurgeryService = require('../services/SurgeryService');

const getByDoctor = async (req, res) => {
  const { doctor } = req.params;

  try {
    const surgeries = await SurgeryService.getByDoctor(doctor);

    if(!surgeries.length) return res.status(404).json({ message: 'Surgeries not found' })

    res.status(200).json(surgeries);
    
  } catch(error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getByDoctor,
};
