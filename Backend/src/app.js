import express from 'express'
import config from './config'
import empresasRoutes from './routes/empresas.routes'
import personaRoutes from './routes/personas.routes'
import puestosRoutes from './routes/puestos_trabajo.routes'

const app = express();
const cors = require('cors');

//Settings
app.set('port', config.port);

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(empresasRoutes, puestosRoutes);
app.use(personaRoutes);

export default app