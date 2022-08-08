const getUsersMe = (req, res) => {
  const { user } = req;

  res.status(200).json(user.data);
};

module.exports = {
  getUsersMe,
};
