import express from 'express';
import cors from 'cors';
import userRouter from './src/routes/userRoutes.js'

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/usuarios', userRouter)
app.use('/agregarUsuario', userRouter)

// tarea para el que quiera. Crear la ruta post para insertar en la bd un usuario

app.listen( port, () => {
    console.log(`Servidor funcionando en el puerto ${port}`);
})