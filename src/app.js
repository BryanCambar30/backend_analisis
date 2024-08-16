import express from 'express'
import config from './config'
import empresasRoutes from './routes/empresas.routes'

const app = express();

//Settings
app.set('port', config.port);

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(empresasRoutes);

export default app