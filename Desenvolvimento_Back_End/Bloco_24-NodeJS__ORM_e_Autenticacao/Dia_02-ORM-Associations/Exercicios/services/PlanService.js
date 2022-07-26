const { Plan, Patient } = require('../models');

const getById = async (planId) => {
  const plan = await Plan.findByPk(planId, {
    include: { model: Patient, as: 'patients' }
  });

  return plan;
};

module.exports = {
  getById,
};
