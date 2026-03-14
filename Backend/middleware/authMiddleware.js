// TODO: Verify JWT token and attach user to req.user
// Usage: router.get('/protected', protect, handler)
const protect = (req, res, next) => {
  // placeholder
  next();
};

// TODO: Restrict access to specific roles
// Usage: router.get('/admin', protect, authorizeRoles('admin'), handler)
const authorizeRoles = (...roles) => (req, res, next) => {
  // placeholder
  next();
};

module.exports = { protect, authorizeRoles };
