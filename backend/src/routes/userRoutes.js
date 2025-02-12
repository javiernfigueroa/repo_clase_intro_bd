import express from 'express';
import pool from '../config/db.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM usuarios');
        return res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al obtener datos' });
    }
});

router.post('/', async (req, res) => {
    const { email, nombre, prioridad } = req.body;

    const result = await pool.query(
        'INSERT INTO usuarios (email, nombre, prioridad) VALUES ($1, $2, $3) RETURNING *',
        [email, nombre, prioridad]
    );
    res.status(201).json(result.rows[0]);
})


export default router;