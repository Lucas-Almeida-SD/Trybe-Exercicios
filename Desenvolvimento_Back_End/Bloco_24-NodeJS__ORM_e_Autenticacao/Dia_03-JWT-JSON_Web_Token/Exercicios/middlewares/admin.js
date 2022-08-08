const generateError = require('../helpers/generateError');

const admin = (req, res, next) => {
  const { admin: isAdmin } = req.user.data;
  
  if (!isAdmin) {
    const { error: { code, message } } = generateError(403, 'Restricted access');

    return res.status(code).json({ error: { message } });
  }

  next();
};

module.exports = admin;
