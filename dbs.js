const mssql = require("mssql");

const config = require("./config/db");

const connectToDb = async () => {
  try {
    const pool = await mssql.connect(config);
    return pool;
  } catch (error) {
    throw new Error(error);
  }
};



const query = async (query, options) => {
    const pool = await connectToDb();
    var request = await pool.request();
    const results = request.query(query);
    return results;
  };
  module.exports = {
    query
  };