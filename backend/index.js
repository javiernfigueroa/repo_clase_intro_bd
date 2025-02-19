import express from 'express';
import cors from 'cors';
import userRouter from './src/routes/userRoutes.js';
import ventasRouter from './src/routes/ventasRoutes.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/usuarios', userRouter);
app.use('/agregarUsuario', userRouter);

app.use('/ventas', ventasRouter);

app.listen(port, () => {
    console.log(`Servidor funcionando en el puerto ${port}`);
});
