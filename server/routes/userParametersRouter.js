import { Router } from "express";

const router = Router()

import { 
    createUserParameters,
    getUserParametersByUserId
 } from "../controllers/userController.js";

router.post('/', createUserParameters)
router.get('/:id', getUserParametersByUserId)

export default router