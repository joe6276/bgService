const config = {
    user:process.env.user,
    password: process.env.password,
    database: process.env.database,
    server: process.env.server,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        trustedConnection: true,
        encrypt: true,
        trustServerCertificate: true
    }
};

module.exports = config;