const bcrypt = require("bcrypt");
const gentoken = require('../helpers/generateToken');
const db = require("../db/dbConnection");

module.exports = {
  login: async (username, password, done) => {
    try {
      let results = await db.exec("getUser", { username });
      console.log(results.recordset);

      const user = results.recordset[0];
      if (!user) return done("Account does not exist");
      
      const validPass = await bcrypt.compare(password, user.password);
      if (!validPass) return done("Invalid credentials");

      const token = gentoken(user.id)

      done(null, { user, token});
    } catch (error) {
      done(error.message);
    }
  },

  register: async (username, pass, project_name, done) => {
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(pass, salt);
    console.log({password});
    try {
      let results = await db.exec("postUsers", {
        username,
        password,
        project_name,
      });
      const user = results.recordset[0]
      const token = gentoken(user.id)
      done(null, "User created successfully",token);
    } catch (error) {
      done(error.message);
    }
  },
  deleteUser: async (username) => {
    try {
      let results = await db.exec("deleteUser", { username });

      console.log(results.recordset);
    } catch (error) {
      console.log(error.message);
    }
  },
  updatePassword: async (username, password) => {
    try {
      let results = await db.exec("updateUser", { username, password });

      console.log(results.recordset);
    } catch (error) {
      console.log(error.message);
    }
  },
};
