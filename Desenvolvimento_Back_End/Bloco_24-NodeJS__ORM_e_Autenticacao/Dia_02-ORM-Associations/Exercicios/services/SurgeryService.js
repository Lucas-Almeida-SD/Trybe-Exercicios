const { Op } = require("sequelize");
const { Surgery, Patient } = require('../models');

const getByDoctor = async (doctor) => {
  const surgeries = await Surgery.findAll({ 
    where: { doctor: { [Op.substring]: doctor } },
    include: [{ model: Patient, as: 'patients', through: { attributes: [] } }]
   });
  
  return surgeries;
};

module.exports = {
  getByDoctor,
};
