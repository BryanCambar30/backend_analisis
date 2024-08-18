import { Router } from "express";
import { savePuestoTrabajo, saveTipoContrato, saveContrato, getContratoById, saveRequisito, saveTipoRequisito } from '../controllers/puestos_trabajo.controller'

const router = Router()

router.post('/puesto/save', savePuestoTrabajo)

router.post('/tipoContrato/save', saveTipoContrato)

router.post('/contrato/save', saveContrato)

router.post('/requisito/save', saveRequisito)

router.post('/tipoRequisito/save', saveTipoRequisito)

router.get('/contrato/get', getContratoById)


export default router