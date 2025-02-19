import express from 'express';
import pool from '../config/db.js';

const router = express.Router();

// AQUI DEBES OBTENER TODOS LOS VENDEDORES
router.get('/vendedores', async (req, res) => {
    // logica para  obtener vendedores
});

// AQUI DEBES OBTENER LOS CLIENTES
router.get('/clientes', async (req, res) => {
  //logica para obtener clientes
});

// AQUI DEBES OBTENER LOS PRODUCTOS
router.get('/productos', async (req, res) => {
    //logica para obtener productos
});

// AQUI DEBES OBTENER TODAS LAS VENTAS
router.get('/ventas', async (req, res) => {
   //logica para obtener ventas
});

// AQUI DEBES REGISTRAR UNA VENTA NUEVA
router.post('/ventas', async (req, res) => {
    // logica para registrar una venta
});

export default router;