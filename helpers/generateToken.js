const jwt = require('jsonwebtoken');

module.exports = (id) => jwt.sign({id}, process.env.TOKEN_SECRET, {expiresIn : '12h'})
