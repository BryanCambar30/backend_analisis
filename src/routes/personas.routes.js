// routes/personas.routes.js
import { Router } from "express";
import { saveEstudios, saveInfoFamilia, saveInfoLegal, saveInfoSanitaria, savePersona } from "../controllers/personas.controller";

const router = Router();

router.post('/persona/save', savePersona);

router.post('/persona/familia/save', saveInfoFamilia);

router.post('/persona/estudios/save', saveEstudios);

router.post('/persona/legale/save', saveInfoLegal);

router.post('/persona/sanitario/save', saveInfoSanitaria)

export default router;
