const bcrypt = require('bcrypt');

 const newPass = async (password) => await bcrypt.hash(password, 10);

 const comp =  async (inputPassword,password) => await bcrypt.compare(inputPassword, password);

 module.exports = {
     newPass ,comp
    }