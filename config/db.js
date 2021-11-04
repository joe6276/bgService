const config = {
    user: 'sa',
    password: '1234',
    database: 'Testing',
    server: 'localhost',
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