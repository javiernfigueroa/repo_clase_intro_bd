import express from 'express';
import pool from '../config/db.js';

const router = express.Router();

// Obtener todos los vendedores
router.get('/vendedores', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM vendedores');
        return res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error obteniendo vendedores' });
    }
});

// Obtener todos los clientes
router.get('/clientes', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM clientes');
        return res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error obteniendo clientes' });
    }
});

// Obtener todos los productos
router.get('/productos', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM productos');
        return res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error obteniendo productos' });
    }
});

// Obtener todas las ventas
router.get('/ventas', async (req, res) => {
    try {
        const result = await pool.query('SELECT ventas.id, vendedores.nombre AS vendedor_nombre, clientes.nombre AS cliente_nombre, productos.nombre AS producto_nombre, ventas.cantidad, ventas.fecha FROM ventas INNER JOIN vendedores ON ventas.vendedor_id = vendedores.id INNER JOIN clientes ON ventas.cliente_id = clientes.id INNER JOIN productos ON ventas.producto_id = productos.id');
        return res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error obteniendo ventas' });
    }
});

// Registrar una nueva venta
router.post('/ventas', async (req, res) => {
    const { vendedor_id, cliente_id, producto_id, cantidad, fecha } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO ventas (vendedor_id, cliente_id, producto_id, cantidad, fecha) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [vendedor_id, cliente_id, producto_id, cantidad, fecha]
        );
        return res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error registrando venta' });
    }
});

export default router;