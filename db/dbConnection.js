const sql = require("mssql/msnodesqlv8");

class Connection {
  constructor() {
    this.connectToDb();
  }

  connectToDb = async () => {
    try {
      const connection = new sql.ConnectionPool({
        server: "localhost",
        database: "BikeStores",
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

  exec = async (procName, data) => {
    const results = await this.pool.request().execute(procName);
    return results;
  };
}

module.exports = {
  query: new Connection().query,
};
