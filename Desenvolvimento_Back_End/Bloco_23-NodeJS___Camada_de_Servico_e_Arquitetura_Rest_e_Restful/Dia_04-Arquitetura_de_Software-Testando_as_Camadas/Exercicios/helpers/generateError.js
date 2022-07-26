const generateError = (code, message) => {
  return { error: { code, message } };
};

module.exports = generateError;
