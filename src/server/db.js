const Pool = require("pg").Pool ;
const pool = new Pool({
    user: process.env.POSTGRES_USER ? process.env.POSTGRES_USER : "postgres",
    password: process.env.POSTGRES_PASSWORD ? process.env.POSTGRES_PASSWORD : "12345678", 
    host: process.env.POSTGRES_PASSWORD ? process.env.POSTGRES_PASSWORD : "localhost", 
    port: process.env.POSTGRES_PORT ? process.env.POSTGRES_PORT : 5432,
    database: process.env.POSTGRES_DATABSE ? process.env.process.env.POSTGRES_DATABSE : "users"
});

module.exports = pool;