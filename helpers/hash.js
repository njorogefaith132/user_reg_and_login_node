const bcrypt = require('bcrypt');

 const newPass = async (password) => await bcrypt.hash(password, 10)

 module.exports = newPass;