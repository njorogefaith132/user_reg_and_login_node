const sql = require("mssql/msnodesqlv8");

class Connection {
  constructor() {
    this.connectToDb();
  }

  connectToDb = async () => {
    try {
      const connection = new sql.ConnectionPool({
        server: "localhost",
        database: "usersystem",
        driver: "msnodesqlv8",
        options: {
          trustServerCertificate: true,
          trustedConnection: true,
        },
      });
      this.pool = await connection.connect();
    } catch (error) {
      throw new Error(error);
    }
  };

  query = async (query, options) => {
    const results = await this.pool.request().query(query);
    return results;
  };

  queryInput = async (input, query, options) => {
    const results = await this.pool.request().input(input).query(query);
    return results;
  };

  createRequest = (request, data = {}) => {
    const keys = Object.keys(data);

    keys.map((keyName) => {
      const value = data[keyName];
      request.input(keyName, value);
    });

    return request;
  };

  exec = async (procName, data = {}) => {
    var request = this.pool.request();
    request = this.createRequest(request, data);
    const results = await request.execute(procName);
    return results;
  };
}

module.exports = {
  query: new Connection().query,
  exec: new Connection().exec,
  queryInput: new Connection().queryInput,
};
