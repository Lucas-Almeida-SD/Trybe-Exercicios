const PlanService = require('../services/PlanService');

const getById = async (req, res) => {
  const { id: planId } = req.params;

  try {
    const plan = await PlanService.getById(planId);

    if(!plan) return res.status(404).json({ message: 'Plan not found' })

    res.status(200).json(plan);
    
  } catch(error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  getById,
};
