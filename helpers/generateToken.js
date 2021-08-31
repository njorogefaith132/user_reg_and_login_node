const jwt = require('jsonwebtoken');

// const gentokens =  (id) => jwt.sign(id, process.env.TOKEN_SECRET , {expiresIn : '1h'} )

module.exports = (id) => jwt.sign({id}, process.env.TOKEN_SECRET, {expiresIn : '12h'})
