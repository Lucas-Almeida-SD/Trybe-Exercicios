const jwt = require('jsonwebtoken');

const secret = 'mysupersecret';

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(400).json({ message: 'Token não encontrado ou informado' });
  }

  const { userId } = req.params;

  try {
    const decoded = jwt.verify(token, secret);
  
    if (decoded.data.id !== Number(userId)) {
      return res.status(401).json({ message: 'Acesso negado' });
    }
  
    next();
  } catch (err) {
    if (err.message === 'jwt expired') {
      return res.status(400).json({ message: err.message });
    }

    res.status(500).json({ message: 'Erro interno', error: err.message });
  }
};
