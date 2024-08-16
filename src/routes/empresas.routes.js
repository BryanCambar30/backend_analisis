import { Router } from "express";
import { getEmpresas, saveEmpresa } from '../controllers/empresas.controllers'

const router = Router()

router.get('/empresas/get', getEmpresas)

router.post('/empresa/save', saveEmpresa)

export default router