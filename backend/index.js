const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// vamos a configurar la conexion a nuestra bd
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'db_clase',
    password: 'admin',
    port: 5432,
})

app.use(cors());

app.get('/amigos', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM usuarios');
        return res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al obtener datos' });
    }
});

// tarea para el que quiera. Crear la ruta post para insertar en la bd un usuario

app.listen( port, () => {
    console.log(`Servidor funcionando en el puerto ${port}`);
})