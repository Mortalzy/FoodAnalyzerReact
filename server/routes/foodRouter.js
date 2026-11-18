import { Router } from "express";
import multer from 'multer'

import authMiddleware from "../middlewares/authMiddleware.js";

const router = Router()

import {
    analyzeFood,
    createFood,
    getFoods,
    deleteFoodById,
    deleteAllFoods,
} from '../controllers/foodController.js'

const upload = multer({limits: {fileSize: 10 * 1024 * 1024}})

router.post('/analyze', upload.single('image'), analyzeFood)

router.post('/', authMiddleware, createFood)
router.get('/', authMiddleware, getFoods)
router.delete('/:id', authMiddleware, deleteFoodById)
router.delete('/', deleteAllFoods)

export default router