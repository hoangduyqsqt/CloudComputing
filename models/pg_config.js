const Pool = require('pg').Pool;
const pg_conn = new Pool({
    user: 'ljlzqmqfbyhhql',
    password: '2e558d6bb09fc05bf4c52013e786263a8c32a0536c0d8977d6609996fd63b9e3',
    host: 'ec2-52-23-131-232.compute-1.amazonaws.com',
    database: 'd2noiuqmo8b0k3',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    },
});

module.exports = pg_conn;