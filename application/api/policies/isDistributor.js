module.exports = (req, res, next) => {
  const {
    user: { role },
  } = req;
  if (role !== 'distributor') return ResponseHelper.json(403, res, 'User must be organization distributor');
  next();
};
