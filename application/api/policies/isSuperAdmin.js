module.exports = (req, res, next) => {
  const {
    user: { role },
  } = req;
  if (role !== 'super-admin') return ResponseHelper.json(403, res, 'User must be super administrator');
  next();
};
