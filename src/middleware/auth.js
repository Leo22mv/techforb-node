const jwt = require('jsonwebtoken');

const SECRET_KEY = '76397924423F4528482B4D6251655468576D5A7134743777217A25432A46294A';

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);

    req.user = user;
    next();
  });
};

module.exports = authenticateJWT;
