const Joi = require('joi');
const { User } = require('../models');

const validateUserId = (userId) => {
  const { error } = Joi.object({
    userId: Joi.number().min(1).integer().required(),
  }).validate({ userId });

  if (error) return { error };

  return {};
};

module.exports = async (req, res) => {
  const { userId } = req.params;

  const isUserIdValid = validateUserId(userId);

  if (isUserIdValid.error) return res.status(400).json({ message: isUserIdValid.error.message });

  try {
    const user = await User.findByPk(userId);

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: 'Erro interno', error: err.message });
  }
};