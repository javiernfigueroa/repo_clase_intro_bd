import pkg from 'pg';

const { Pool } = pkg;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'tiendita',
    password: 'admin',
    port: 5432,
})

export default pool;