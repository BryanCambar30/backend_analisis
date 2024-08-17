import { Router } from "express";
import { savePuestoTrabajo, saveTipoContrato } from '../controllers/puestos_trabajo.controller'

const router = Router()

router.post('/puesto/save', savePuestoTrabajo)
router.post('/tipoContrato/save', saveTipoContrato)


export default router