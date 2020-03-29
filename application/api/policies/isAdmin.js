module.exports = (req, res, next) => {
  const {
    user: { role },
  } = req;
  if (role !== 'admin') return ResponseHelper.json(403, res, 'User must be organization administrator');
  next();
};
